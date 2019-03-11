import React from 'react';
import { cn } from '@bem-react/classname';
import find from 'lodash/find';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import ls from 'local-storage';

import ConfirmationModal from '../../common.blocks/modals/confirmation-modal';
import EllipsisString from '../../common.blocks/ellipsis-string';
import GrabModal from '../../common.blocks/modals/grab-modal';
import Icon from '../../common.blocks/icon';
import Modal from '../../common.blocks/modal';
import RulesModal from '../../common.blocks/rules-modal';
import SubscriptionModal from '../../common.blocks/modals/subscription-modal';
import DeviceButtons from '../device-buttons';

import DeviceInfo from '../device-info';
import DevicePhoto from '../device-photo';
import LoadingList from '../loading-list';
import PinCode from '../pin-code';

import { reachRuleGoal, reachGrabGoal, reachLockGoal, reachUnlockGoal, reachServiceGoal } from '../../lib/metrika';

import './device-card.css';

const classNames = cn('device-card');

export default class DeviceCard extends React.Component {

    _deviceLocationTypes = ['tesseract', 'unreserved']

    constructor(props) {
        super(props);

        this.deviceInfo = {};

        this.state = {
            inputs: {},
            modelInfo: {},
            modalVisible: 'card'
        };

        this._initializeControls();
    }

    componentDidMount() {
        this.props.getDeviceInfo(this.props.deviceId);
    }

    componentWillReceiveProps(nextProps) {
        if (isEmpty(nextProps.deviceInfo)) {
            if (nextProps.fetchInprogress) {
                return;
            }

            return this.props.closeCard();
        }

        if (nextProps.deviceInfo.id !== this.props.deviceId) {
            return;
        }

        if (this.props.disableControls && this.props.disableControls !== nextProps.disableControls) {
            // Если конец действия с девайсом - презапрашиваем информацию об устройстве
            this.props.getDeviceInfo(this.props.deviceId);
        }

        this.deviceInfo = nextProps.deviceInfo;

        for (const param of Object.keys(this.deviceInfo)) {
            this.deviceInfo[param] = this.deviceInfo[param] || '';
        }

        if (!this.deviceInfo.model) {
            this.deviceInfo.model = {};
        }

        this._initializeInputs();
        this._initializeControls();

        if (nextProps.modelInfo) {
            this._initializeModelInfo(nextProps.modelInfo);
        }
    }

    componentWillUnmount() {
        this.props.clearDeviceStore();
    }

    /**
     * Помещаем инициализирующее значение в инпут
     *
     * @private
     */
    _initializeInputs() {
        const hasInputs = !isEmpty(this.state.inputs);

        const inputs = hasInputs ? this.state.inputs : {
            name: this.deviceInfo.model.name || console.log('noname', 'device'),
            os: this.deviceInfo.os || '',
            osVersion: this.deviceInfo.osVersion || '',
            ticket: this.deviceInfo.ticket || '',
            source: this.deviceInfo.source || '',
            serial: this.deviceInfo.serial || '',
            imei: this.deviceInfo.imei || '',
            inventory: this.deviceInfo.inventory || '',
            note: this.deviceInfo.note || '',
            durationOfUse: this.deviceInfo.durationOfUse || ''
        };

        this.setState({ inputs });
    }

    /**
     * Инициализация параметров для кнопок в левой части
     * @private
     */
    _initializeControls() {
        const { disableControls } = this.props;
        const { location, operator, access = {}, isSubscribed } = this.deviceInfo;
        const { canEdit, canUse } = access;
        const { login } = window.globalConfig;
        const canReserve = this._deviceLocationTypes.includes(location);
        const canSubscribe = !canReserve && operator !== login && !isSubscribed;

        this.controls = {
            primary: [
                {
                    i18nKey: 'to-service',
                    isVisible: canEdit && location !== 'service',
                    isDisabled: () => disableControls,
                    onClick: this._toService
                },
                {
                    i18nKey: 'destroy',
                    isVisible: canEdit && location === 'service',
                    isDisabled: () => disableControls,
                    onClick: this._showDestroyConfirmationModal
                },
                {
                    i18nKey: 'grab',
                    isVisible: ['operator', 'takeAway', 'expired'].includes(location) && operator !== login,
                    isDisabled: () => !canUse || disableControls,
                    onClick: this._showGrabCard
                },
                {
                    i18nKey: 'edit',
                    isVisible: canEdit,
                    isDisabled: () => disableControls || this.state.modalVisible === 'edit',
                    onClick: this._switchToEdit
                },
                {
                    i18nKey: 'unlock',
                    isVisible: location === 'reserved' && operator === login,
                    isDisabled: () => disableControls,
                    onClick: this._unlockDevice
                },
                {
                    i18nKey: 'reserve',
                    isVisible: !canEdit && canReserve,
                    isDisabled: () => !canUse || disableControls,
                    onClick: this._lockDevice
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
                    onClick: this._lockDevice
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
        reachRuleGoal();

        ls.set('showModalRules', true);

        this._lockDevice();
        this._showDeviceModal();
    }

    /**
     * Возвращает состояние компонента к отображению окна девайса
     *
     * @returns {void}
     * @private
     */
    _showDeviceModal = () => {
        this.setState({ modalVisible: 'card' });
    }

    /**
     * Переключает контент на редактирование устройства
     *
     * @returns {void}
     * @private
     */
    _switchToEdit = () => {
        this.setState({ modalVisible: 'edit' });
    }

    /**
     * Отмена изменения информации об устройстве
     *
     * @private
     */
    _onCancelEdit = () => {
        this.setState({ modalVisible: 'card' });
        this._initializeInputs();
    }

    /**
     * Валидация поля тикета покупки
     *
     * @returns {String}
     * @private
     */
    _validateTicket() {
        const { inputs = {} } = this.state;
        const { ticket = '' } = inputs;

        if (/st\.yandex-team\.ru\/\w+-\d+/.test(ticket) || /^\w+-\d+$/.test(ticket)) {
            return ticket.match(/\w+-\d+/)[0];
        }

        return '';
    }

    /**
     * Сохранение изменений информации об сутройстве
     *
     * @param {Object} event
     * @returns {void}
     * @private
     */
    _onSaveChanges = event => {
        event.preventDefault();

        const { inputs } = this.state;
        const body = {
            id: this.deviceInfo.id,
            modelId: this.state.modelInfo.modelId,
            inventory: inputs.inventory,
            serial: inputs.serial,
            imei: inputs.imei,
            os: inputs.os,
            osVersion: inputs.osVersion,
            note: inputs.note,
            durationOfUse: Number(inputs.durationOfUse),
            ticket: this._validateTicket(),
            source: inputs.source
        };

        this.props.saveDevice(body);
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
    _grabDevice = () => {
        reachGrabGoal(this.deviceInfo.id, this.deviceInfo.model.name);

        this.props.grabDevice(this.deviceInfo.id);

        this._showDeviceModal();
    }

    /**
     * Забронировать устройство
     *
     * @returns {void}
     * @private
     */
    _lockDevice = () => {
        if (!ls.get('showModalRules')) {
            return this._showRuleModal();
        }

        reachLockGoal(this.deviceInfo.id, this.deviceInfo.model.name);

        this.props.lockDevice(this.deviceInfo.id);
    }

    /**
     * Обработчик нажатия на кнопку "Подписаться"
     *
     * @returns {void}
     * @private
     */
    _onSubscribeClick = () => {
        if (!ls.get('showSubscription')) {
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
        if (doNotShowAgain) {
            ls.set('showSubscription', true);
        }

        this._subscribe();
        this._showDeviceModal();
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
        this.props.subscribeToDevice(this.deviceInfo.id, 'POST');
    }

    /**
     * Снятие подписки на устройство
     *
     * @returns {void}
     * @private
     */
    _unsubscribe = () => {
        this.props.subscribeToDevice(this.deviceInfo.id, 'DELETE');
    }

    /**
     * Отправить устройство "В ремонт"
     *
     * @returns {void}
     * @private
     */
    _toService = () => {
        reachServiceGoal(this.deviceInfo.id, this.deviceInfo.model.name);

        this.props.toServiceDevice(this.deviceInfo.id);
    }

    /**
     * Вывести устройство из эксплуатации
     *
     * @returns {void}
     * @private
     */
    _destroyDevice = () => {
        this.props.destroyDevice(this.deviceInfo.id);
        this._closeConfirmationModal();
    }

    /**
     * Разбронировать устройство
     *
     * @returns {void}
     * @private
     */
    _unlockDevice = () => {
        reachUnlockGoal(this.deviceInfo.id, this.deviceInfo.model.name);

        this.props.unlockDevice(this.deviceInfo.id);
    }

    /**
     * Показывает модальное окно для подтверждения операции "Списать устройство"
     *
     * @returns {void}
     * @private
     */
    _showDestroyConfirmationModal = () => {
        this.setState({ modalVisible: 'destroy' });
    }

    /**
     * Закрывает модальное окно для подтверждения
     *
     * @returns {void}
     * @private
     */
    _closeConfirmationModal = () => {
        this.setState({ modalVisible: 'card' });
    }

    /**
     * Обработчик изменения строки ввода названия девайса с запросом на маркет
     *
     * @param {String} value
     * @returns {void}
     * @private
     */
    _onDeviceNameChange = value => {
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
        const { saveDevicePublicInfo } = this.props;
        const { id } = this.deviceInfo;

        saveDevicePublicInfo({ id, pin });
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
            deviceId,
            hasSubscriptions,
            models
        } = this.props;
        const { model = {}, pin } = this.deviceInfo;
        const { name = console.log('noname', 'device') } = model;

        return (
            <div className={classNames()}>
                <div className={classNames('content')}>
                    <div className={classNames('left')}>
                        <div className={classNames('preview')}>
                            <h1 className={classNames('title')}>
                                <EllipsisString>{name}</EllipsisString>
                            </h1>
                            <DevicePhoto deviceInfo={this.deviceInfo} />
                        </div>
                        <div className={classNames('pin-code')}>
                            <PinCode value={pin} onSave={this._savePin} />
                        </div>
                        <div className={classNames('buttons')}>
                            <DeviceButtons items={this.controls.primary} action />
                            <DeviceButtons items={this.controls.secondary} />
                        </div>
                    </div>
                    <div className={classNames('info')}>
                        <DeviceInfo
                            deviceInfo={this.deviceInfo}
                            inputs={this.state.inputs}
                            models={models}
                            type={this.state.modalVisible}
                            onCancelChanges={this._onCancelEdit}
                            onDeviceNameChange={this._onDeviceNameChange}
                            onInputChange={this._onInputChange}
                            onModelSelect={this._onModelSelect}
                            onSaveChanges={this._onSaveChanges}
                        />
                    </div>
                    <div className={classNames('right')}>
                        <div className={classNames('history', { full: !hasSubscriptions })}>
                            <div className={classNames('list-wrapper')}>
                                <LoadingList
                                    theme="blue"
                                    type="history"
                                    entityType="device"
                                    id={deviceId}
                                    update={actionInprogress}
                                />
                            </div>
                        </div>
                        <div className={classNames('subscription', { hidden: !hasSubscriptions })}>
                            <div className={classNames('list-wrapper')}>
                                <LoadingList
                                    theme="blue"
                                    type="subscriptions"
                                    entityType="device"
                                    id={deviceId}
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
        const operator = get(this.deviceInfo, 'operator');
        const deviceName = get(this.deviceInfo, 'model.name', console.log('noname', 'device'));

        return (
            <div>
                <Modal
                    type="device-card"
                    autoclosable
                    onShouldClose={this.props.closeCard}
                    onOutsideClick={this.props.closeCard}
                >
                    {this._modalContent()}
                </Modal>

                {modalVisible === 'subscribe' &&
                    <SubscriptionModal
                        device={deviceName}
                        onSubmit={this._handleSubmitSubscribe}
                        onCancel={this._showDeviceModal}
                    />}

                {modalVisible === 'rule' &&
                    <RulesModal
                        doAfterClick={this._agreeRules}
                    />}

                {modalVisible === 'grab' &&
                    <GrabModal
                        operator={operator}
                        deviceName={deviceName}
                        onAgree={this._grabDevice}
                        onCancel={this._showDeviceModal}
                    />}

                {modalVisible === 'destroy' &&
                    <ConfirmationModal
                        title={deviceName}
                        message={console.log('destroy-question', 'device')}
                        onCancel={this._closeConfirmationModal}
                        onConfirm={this._destroyDevice}
                    />}
            </div>
        );
    }

    render() {
        return !isEmpty(this.deviceInfo) && this._renderModals();
    }
}
