import React from 'react';
import { cn } from '@bem-react/classname';
import find from 'lodash/find';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

import { parseTicket } from '../../lib/helpers';
import { reachRuleGoal, reachGrabGoal, reachLockGoal, reachUnlockGoal, reachServiceGoal } from '../../lib/metrika';

import ConfirmationModal from '../../common.components/modals/confirmation-modal';
import EllipsisString from '../../common.components/ellipsis-string';
import GrabModal from '../../common.components/modals/grab-modal';
import Icon from '../../common.components/icon';
import Modal from '../../common.components/modal';
import RulesModal from '../../common.components/rules-modal';
import SubscriptionModal from '../../common.components/modals/subscription-modal';

import ProductButtons from '../product-buttons';
import ProductInfo from '../product-info';
import ProductDestroyForm from '../product-destroy-form';
import ProductPhoto from '../product-photo';
import ProductServiceForm from '../product-service-form';
import LoadingList from '../loading-list';
import PinCode from '../pin-code';

import i18n from '../i18n';

import './product-card.css';

const classNames = cn('product-card');

export default class ProductCard extends React.Component {
    constructor(props) {
        super(props);

        this.productInfo = {};

        this.state = {
            inputs: {},
            modelInfo: {},
            modalVisible: 'card',
            formVisible: null,
            destroyTicket: null
        };

        this._initializeControls();
    }

    componentDidMount() {
        this.props.getProductInfo(this.props.productId);
    }

    componentWillReceiveProps(nextProps) {
        if (isEmpty(nextProps.productInfo)) {
            if (nextProps.fetchInprogress) {
                return;
            }

            return this.props.closeCard();
        }

        if (nextProps.productInfo.id !== this.props.productId) {
            return;
        }

        if (this.props.disableControls && this.props.disableControls !== nextProps.disableControls) {
            // Если конец действия с девайсом - презапрашиваем информацию об устройстве
            this.props.getProductInfo(this.props.productId);
        }

        this.productInfo = nextProps.productInfo;

        for (const param of Object.keys(this.productInfo)) {
            this.productInfo[param] = this.productInfo[param] || '';
        }

        if (!this.productInfo.model) {
            this.productInfo.model = {};
        }

        this._initializeInputs();
        this._initializeControls();

        if (nextProps.modelInfo) {
            this._initializeModelInfo(nextProps.modelInfo);
        }
    }

    componentWillUnmount() {
        this.props.clearProductStore();
    }

    /**
     * Помещаем инициализирующее значение в инпут
     *
     * @private
     */
    _initializeInputs() {
        const hasInputs = !isEmpty(this.state.inputs);

        const inputs = hasInputs ? this.state.inputs : {
            name: this.productInfo.model.name || i18n('noname', 'product'),
            os: this.productInfo.os || '',
            osVersion: this.productInfo.osVersion || '',
            ticket: this.productInfo.ticket || '',
            source: this.productInfo.source || '',
            serial: this.productInfo.serial || '',
            imei: this.productInfo.imei || '',
            inventory: this.productInfo.inventory || '',
            note: this.productInfo.note || '',
            durationOfUse: this.productInfo.durationOfUse || ''
        };

        this.setState({ inputs });
    }

    /**
     * Инициализация параметров для кнопок в левой части
     * @private
     */
    _initializeControls() {
        const { disableControls } = this.props;
        const { location, operator, access = {}, isSubscribed } = this.productInfo;
        const { canEdit, canUse } = access;
        const { login, locations } = globalConfig;
        const isTechnical = locations.technical.includes(location);
        const canReserve = locations.free.includes(location);
        const canSubscribe = !canReserve && operator !== login && !isSubscribed;

        this.controls = {
            primary: [
                {
                    i18nKey: 'to-service',
                    isVisible: canEdit && !isTechnical,
                    isDisabled: () => this._isDisabledFormButton('service'),
                    onClick: this._showServiceForm
                },
                {
                    i18nKey: 'destroy',
                    isVisible: canEdit && location === 'service',
                    isDisabled: () => this._isDisabledFormButton('destroy'),
                    onClick: this._showDestroyForm
                },
                {
                    i18nKey: 'grab',
                    isVisible: locations.operator.includes(location) && operator !== login,
                    isDisabled: () => !canUse || disableControls,
                    onClick: this._showGrabCard
                },
                {
                    i18nKey: 'edit',
                    isVisible: canEdit,
                    isDisabled: () => this._isDisabledFormButton('edit'),
                    onClick: this._switchToEdit
                },
                {
                    i18nKey: 'unlock',
                    isVisible: location === 'reserved' && operator === login,
                    isDisabled: () => disableControls,
                    onClick: this._unlockProduct
                },
                {
                    i18nKey: 'reserve',
                    isVisible: !canEdit && canReserve,
                    isDisabled: () => !canUse || disableControls,
                    onClick: this._lockProduct
                },
                {
                    i18nKey: 'subscribe',
                    isVisible: !canEdit && canSubscribe,
                    isDisabled: () => !canUse || disableControls,
                    onClick: this._onSubscribeClick
                },
                {
                    i18nKey: 'unsubscribe',
                    isVisible: !canEdit && isSubscribed,
                    isDisabled: () => !canUse || disableControls,
                    onClick: this._unsubscribe
                }
            ],
            secondary: [
                {
                    i18nKey: 'reserve',
                    isVisible: canEdit && canReserve,
                    isDisabled: () => !canUse || disableControls,
                    onClick: this._lockProduct
                },
                {
                    i18nKey: 'subscribe',
                    isVisible: canEdit && canSubscribe,
                    isDisabled: () => !canUse || disableControls,
                    onClick: this._onSubscribeClick
                },
                {
                    i18nKey: 'unsubscribe',
                    isVisible: canEdit && isSubscribed,
                    isDisabled: () => !canUse || disableControls,
                    onClick: this._unsubscribe
                }
            ]
        };
    }

    /**
     * Определяет, нужно ли делать неактивной кнопку для открытия формы
     *
     * @param {String} formName
     * @returns {boolean|*}
     * @private
     */
    _isDisabledFormButton = formName => this.state.formVisible === formName || this.props.disableControls

    /**
     * Задаём новые значения для информации о модели
     * @param {Object} newModelInfo
     * @private
     */
    _initializeModelInfo(newModelInfo) {
        if (isEmpty(newModelInfo)) {
            return;
        }

        const { modelInfo = {}, inputs = {} } = this.state;

        if (isEqual(newModelInfo, modelInfo.model)) {
            return;
        }

        modelInfo.model = newModelInfo;
        modelInfo.modelId = newModelInfo.id;

        inputs.name = newModelInfo.name || '';
        inputs.os = newModelInfo.os || '';
        inputs.osVersion = newModelInfo.osVersion || '';

        this.setState({ modelInfo, inputs });
    }

    /**
     * Показывает правила при первом бронировании
     *
     * @returns {void}
     * @private
     */
    _showRuleModal() {
        this.setState({ modalVisible: 'rule' });
    }

    /**
     * Действие после принятия правил
     *
     * @returns {void}
     * @private
     */
    _agreeRules = () => {
        const { localStorage } = this.props;

        reachRuleGoal();

        localStorage.setItem('showModalRules', true);

        this._lockProduct();
        this._showProductCard();
    }

    /**
     * Возвращает состояние компонента к отображению окна девайса
     *
     * @returns {void}
     * @private
     */
    _showProductCard = () => {
        this.setState({
            modalVisible: 'card',
            formVisible: null
        });
    }

    /**
     * Переключает контент на редактирование устройства
     *
     * @returns {void}
     * @private
     */
    _switchToEdit = () => {
        this.setState({ formVisible: 'edit' });
    }

    /**
     * Отмена изменения информации об устройстве
     *
     * @private
     */
    _onCancelEdit = () => {
        this._showProductCard();
        this._initializeInputs();
    }

    /**
     * Сохранение изменений информации об сутройстве
     *
     * @returns {void}
     * @private
     */
    _onSaveChanges = () => {
        const { inputs } = this.state;
        const body = {
            id: this.productInfo.id,
            modelId: this.state.modelInfo.modelId,
            inventory: inputs.inventory,
            serial: inputs.serial,
            imei: inputs.imei,
            os: inputs.os,
            osVersion: inputs.osVersion,
            note: inputs.note,
            durationOfUse: Number(inputs.durationOfUse),
            ticket: parseTicket(inputs.ticket) || '',
            source: inputs.source
        };

        this.props.saveProduct(body);
        this._onCancelEdit();
    }

    /**
     * Показывает предупреждение при отбирании устройства
     *
     * @returns {void}
     * @private
     */
    _showGrabCard = () => {
        this.setState({ modalVisible: 'grab' });
    }

    /**
     * Переписывает чужое устройство на пользователя
     *
     * @returns {void}
     * @private
     */
    _grabProduct = () => {
        const { id, model } = this.productInfo;

        reachGrabGoal(id, model.name);

        this.props.grabProduct(id);

        this._showProductCard();
    }

    /**
     * Забронировать устройство
     *
     * @returns {void}
     * @private
     */
    _lockProduct = () => {
        const { localStorage } = this.props;

        if (!localStorage.getItem('showModalRules')) {
            return this._showRuleModal();
        }

        const { id, model } = this.productInfo;

        reachLockGoal(id, model.name);

        this.props.lockProduct(id);
    }

    /**
     * Обработчик нажатия на кнопку "Подписаться"
     *
     * @returns {void}
     * @private
     */
    _onSubscribeClick = () => {
        const { localStorage } = this.props;

        if (!localStorage.getItem('showSubscription')) {
            return this.setState({ modalVisible: 'subscribe' });
        }

        this._subscribe();
    }

    /**
     * Обработчик подписки на устройство из модального окна подписки
     *
     * @param {bool} doNotShowAgain
     * @returns {void}
     * @private
     */
    _handleSubmitSubscribe = doNotShowAgain => {
        const { localStorage } = this.props;

        if (doNotShowAgain) {
            localStorage.setItem('showSubscription', true);
        }

        this._subscribe();
        this._showProductCard();
    }

    /**
     * Универсальный обработчик для полей ввода
     *
     * @param {String} type
     * @param {String} value
     * @returns {void}
     * @private
     */
    _onInputChange = (type, value) => {
        const { inputs } = this.state;

        this.setState({ inputs: { ...inputs, [type]: value } });
    }

    /**
     * Подписка на устройство
     *
     * @returns {void}
     * @private
     */
    _subscribe = () => {
        this.props.subscribeToProduct(this.productInfo.id, 'POST');
    }

    /**
     * Снятие подписки на устройство
     *
     * @returns {void}
     * @private
     */
    _unsubscribe = () => {
        this.props.subscribeToProduct(this.productInfo.id, 'DELETE');
    }

    /**
     * Отправить устройство "В ремонт"
     *
     * @param {Object} params
     * @returns {void}
     * @private
     */
    _toService = params => {
        const { toServiceProduct } = this.props;
        const { id: productId, model } = this.productInfo;

        reachServiceGoal(productId, model.name);

        toServiceProduct({ productId, params });

        this._showProductCard();
    }

    /**
     * Вывести устройство из эксплуатации
     *
     * @returns {void}
     * @private
     */
    _destroyProduct = () => {
        const { destroyProduct } = this.props;
        const { destroyTicket: ticket } = this.state;
        const { id: productId } = this.productInfo;

        destroyProduct({ productId, params: { ticket } });

        this._showProductCard();
    }

    /**
     * Разбронировать устройство
     *
     * @returns {void}
     * @private
     */
    _unlockProduct = () => {
        reachUnlockGoal(this.productInfo.id, this.productInfo.model.name);

        this.props.unlockProduct(this.productInfo.id);
    }

    /**
     * Показывает модальное окно для подтверждения операции "Списать устройство"
     *
     * @param {String} ticket
     * @returns {void}
     * @private
     */
    _showDestroyConfirmationModal = ticket => {
        this.setState({
            modalVisible: 'destroy',
            destroyTicket: ticket
        });
    }

    /**
     * Показывает форму отправки устройства в сервис
     *
     * @returns {void}
     * @private
     */
    _showServiceForm = () => {
        this.setState({ formVisible: 'service' });
    }

    /**
     * Показывает форму списания устройства
     *
     * @param {String} ticket
     * @returns {void}
     * @private
     */
    _showDestroyForm = () => {
        this.setState({ formVisible: 'destroy' });
    }

    /**
     * Обработчик изменения строки ввода названия девайса с запросом на маркет
     *
     * @param {String} value
     * @returns {void}
     * @private
     */
    _onProductNameChange = value => {
        if (!value) {
            return;
        }

        if (/market\.yandex\.ru\/product[a-zA-Z-0-9]*\/\d+/.test(value)) {
            const id = value.match(/\/\d+/)[0].replace('/', '');

            this.props.getMarketModelInfo(id);

            return;
        }

        const { inputs } = this.state;

        inputs.name = value;

        this.setState({ inputs });
    }

    /**
     * Обработчик нажатия на модель в саджесте
     *
     * @param {String} name
     * @returns {void}
     * @private
     */
    _onModelSelect = name => {
        const { models, getMarketModelInfo } = this.props;
        const model = find(models, { name });

        if (model) {
            getMarketModelInfo(model.id);
        }
    }

    /**
     * При изменении пин кода делаем запрос в API
     * @param {String} pin
     * @private
     */
    _savePin = pin => {
        const { saveProductPublicInfo } = this.props;
        const { id } = this.productInfo;

        saveProductPublicInfo({ id, pin });
    }

    /**
     * Возращает содержимое информационной колонки
     *
     * @returns {*}
     * @private
     */
    _renderInfoColumn = () => {
        const { models } = this.props;

        switch (this.state.formVisible) {
            case 'service':
                return (
                    <ProductServiceForm
                        productInfo={this.productInfo}
                        onSubmit={this._toService}
                        onCancel={this._onCancelEdit}
                    />
                );
            case 'destroy':
                return (
                    <ProductDestroyForm
                        productInfo={this.productInfo}
                        onSubmit={this._showDestroyConfirmationModal}
                        onCancel={this._onCancelEdit}
                    />
                );
            default:
                return (
                    <ProductInfo
                        productInfo={this.productInfo}
                        inputs={this.state.inputs}
                        isEdit={this.state.formVisible === 'edit'}
                        models={models}
                        onCancelChanges={this._onCancelEdit}
                        onProductNameChange={this._onProductNameChange}
                        onInputChange={this._onInputChange}
                        onModelSelect={this._onModelSelect}
                        onSaveChanges={this._onSaveChanges}
                    />
                );
        }
    }

    /**
     * Возвращает содержимое модального окна
     *
     * @returns {HTMLElement}
     * @private
     */
    _modalContent() {
        const {
            actionInprogress,
            closeCard,
            productId,
            hasSubscriptions
        } = this.props;
        const { model = {}, pin } = this.productInfo;
        const { name = i18n('noname', 'product') } = model;

        return (
            <div className={classNames()}>
                <div className={classNames('content')}>
                    <div className={classNames('left')}>
                        <div className={classNames('preview')}>
                            <h1 className={classNames('title')}>
                                <EllipsisString>{name}</EllipsisString>
                            </h1>
                            <ProductPhoto productInfo={this.productInfo} />
                        </div>
                        <div className={classNames('pin-code')}>
                            <PinCode value={pin} onSave={this._savePin} />
                        </div>
                        <div className={classNames('buttons')}>
                            <ProductButtons items={this.controls.primary} action />
                            <ProductButtons items={this.controls.secondary} />
                        </div>
                    </div>
                    <div className={classNames('info')}>
                        {this._renderInfoColumn()}
                    </div>
                    <div className={classNames('right')}>
                        <div className={classNames('history', { full: !hasSubscriptions })}>
                            <div className={classNames('list-wrapper')}>
                                <LoadingList
                                    theme="blue"
                                    type="history"
                                    entityType="product"
                                    id={productId}
                                    update={actionInprogress}
                                />
                            </div>
                        </div>
                        <div className={classNames('subscription', { hidden: !hasSubscriptions })}>
                            <div className={classNames('list-wrapper')}>
                                <LoadingList
                                    theme="blue"
                                    type="subscriptions"
                                    entityType="product"
                                    id={productId}
                                    update={actionInprogress}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={classNames('close')}>
                        <Icon type="close" onClick={closeCard} />
                    </div>
                </div>
            </div>
        );
    }

    /**
     * В зависимости от состояния отображает нужное модальное окно
     *
     * @returns {HTMLElement}
     * @private
     */
    _renderModals() {
        const { modalVisible } = this.state;
        const operator = get(this.productInfo, 'operator');
        const productName = get(this.productInfo, 'model.name', i18n('noname', 'product'));

        return (
            <div>
                <Modal
                    type="product-card"
                    autoclosable
                    onShouldClose={this.props.closeCard}
                    onOutsideClick={this.props.closeCard}
                >
                    {this._modalContent()}
                </Modal>

                {modalVisible === 'subscribe' &&
                    <SubscriptionModal
                        product={productName}
                        onSubmit={this._handleSubmitSubscribe}
                        onCancel={this._showProductCard}
                    />}

                {modalVisible === 'rule' &&
                    <RulesModal
                        doAfterClick={this._agreeRules}
                    />}

                {modalVisible === 'grab' &&
                    <GrabModal
                        operator={operator}
                        productName={productName}
                        onAgree={this._grabProduct}
                        onCancel={this._showProductCard}
                    />}

                {modalVisible === 'destroy' &&
                    <ConfirmationModal
                        title={productName}
                        message={i18n('destroy-question', 'product')}
                        onConfirm={this._destroyProduct}
                        onCancel={this._showProductCard}
                    />}
            </div>
        );
    }

    render() {
        return !isEmpty(this.productInfo) && this._renderModals();
    }
}
