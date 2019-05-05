import React from 'react';
import { withNaming } from '@bem-react/classname';
import propTypes from 'prop-types';
import get from 'lodash/get';

import { reachRuleGoal, reachGrabGoal, reachLockGoal, reachUnlockGoal } from '../../../lib/metrika';
import { freezeBody, unfreezeBody } from '../../../lib/freezer';

import Badge from '../../../common.components/badge';
import Button from '../../../common.components/button';
import CubeUnavailableModal from '../../../common.components/modals/cube-unavailable-modal';
import ProductIcon from '../../../common.components/product-icon';
import ExpiredBadge from '../../../common.components/badge/expired-badge';
import GrabModal from '../../../common.components/modals/grab-modal';
import IdmModal from '../../../common.components/modals/idm-modal';
import RulesModal from '../../../common.components/rules-modal';

import ProductDescription from './__description';

import i18n from '../../i18n';

import './product.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('product');

export default class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: null
        };
    }

    /**
     * По нажатию на девайс показывать модальное окно
     *
     * @param {Object} event
     * @returns {void}
     * @private
     */
    _showProductCardModal = event => {
        const { name } = event.target;

        // Не показывать окно, когда нажимают на кнопку "Забронировать/Удалить бронь", ссылку на стаф, иконку статуса
        if (['button', 'user-login', 'icon'].includes(name)) {
            return;
        }

        this.props.openCard(this.props.product.id);
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
     * Показывает/скрывает карточку "Забрать девайс"
     *
     * @returns {void}
     * @private
     */
    _showGrabCard() {
        this.setState({ modalVisible: 'grab' });
    }

    /**
     * Показывает/скрывает карточку "Забрать девайс"
     *
     * @returns {void}
     * @private
     */
    _closeModal = () => {
        unfreezeBody();
        this.setState({ modalVisible: null });
    }

    /**
     * Действие после принятия правил
     *
     * @returns {void}
     * @private
     */
    _agreeRules = () => {
        reachRuleGoal();

        const { localStorage } = this.props;

        localStorage.setItem('showModalRules', true);

        this._lockProduct();
        this._closeModal();
    }

    /**
     * Обработчик нажатия на кнопку "Забронировать"
     *
     * @returns {void}
     * @private
     */
    _onReserveBtnClick = () => {
        const { localStorage } = this.props;

        if (!localStorage.getItem('showModalRules')) {
            return this._showRuleModal();
        }

        this._lockProduct();
    }

    /**
     * Обработчик нажатия на кнопку "Забрать себе"
     *
     * @returns {void}
     * @private
     */
    _onGrabBtnClick = () => {
        freezeBody();

        this._showGrabCard();
    }

    /**
     * Переписывает чужое устройство на пользователя
     *
     * @returns {void}
     * @private
     */
    _grabProduct = () => {
        reachGrabGoal(this.props.product.id, this.props.product.model.name);

        this.props.grabProduct(this.props.product.id);

        this._closeModal();
    }

    /**
     * Бронирует устройство и обновляет списки
     *
     * @returns {void}
     * @private
     */
    _lockProduct() {
        reachLockGoal(this.props.product.id, this.props.product.model.name);

        this.props.lockProduct(this.props.product.id);
    }

    /**
     * Снимает бронь и обновляет списки
     *
     * @returns {void}
     * @private
     */
    _unlockProduct = () => {
        reachUnlockGoal(this.props.product.id, this.props.product.model.name);

        this.props.unlockProduct(this.props.product.id);
    }

    /**
     * Возвращает плашку для нужного location
     * @param {String} location
     * @returns {HTMLElement}
     * @private
     */
    _getBadge(location) {
        const { product } = this.props;

        if (location === 'expired') {
            return <ExpiredBadge dateDifference={new Date() - new Date(product.expired)} />;
        }

        return <Badge type={location} text={i18n(`badge-${location}`, 'product')} />;
    }

    /**
     * Возвращает нужную кнопку
     *
     * @returns {HTMLElement}
     * @private
     */
    _renderButton() {
        const { disableControls, product: { location, access, operator } } = this.props;
        const { login, locations } = globalConfig;
        const isReserved = location === 'reserved';
        const onHand = locations.operator.includes(location);
        const canUse = get(access, 'canUse', false) &&
            !locations.unavailable.includes(location) &&
            !disableControls;

        if (isReserved) {
            if (login === operator) {
                return (
                    <Button
                        name="button"
                        disabled={!canUse}
                        onClick={this._unlockProduct}
                    >
                        {i18n('unlock', 'product')}
                    </Button>
                );
            }

            return <div />;
        }

        if (onHand) {
            if (login !== operator) {
                return (
                    <Button
                        name="button"
                        disabled={!canUse}
                        onClick={this._onGrabBtnClick}
                    >
                        {i18n('grab', 'product')}
                    </Button>
                );
            }

            return <div />;
        }

        return (
            <Button
                name="button"
                disabled={!canUse}
                onClick={this._onReserveBtnClick}
            >
                {i18n('reserve', 'product')}
            </Button>
        );
    }

    _renderModal() {
        switch (this.state.modalVisible) {
            case 'rule':
                return this._renderRulesModal();
            case 'idm':
                return this._renderIdmModal();
            case 'grab':
                return this._renderGrabModal();
            case 'unavailable':
            case 'offline':
                return this._renderCubeInfoModal();
            default:
                return null;
        }
    }

    _renderRulesModal() {
        const { localStorage } = this.props;

        const isShowModalRules = localStorage.getItem('showModalRules');

        return !isShowModalRules && <RulesModal doAfterClick={this._agreeRules} />;
    }

    _renderIdmModal() {
        return (
            <IdmModal
                onClose={this._closeModal}
            />
        );
    }

    _renderGrabModal() {
        const { product } = this.props;
        const productName = get(product, 'model.name', i18n('noname', 'product'));
        const operator = get(product, 'operator');

        return (
            <GrabModal
                operator={operator}
                productName={productName}
                onAgree={this._grabProduct}
                onCancel={this._closeModal}
            />
        );
    }

    _renderCubeInfoModal() {
        const { modalVisible } = this.state;
        const { cubeName } = this.props;

        return (
            <CubeUnavailableModal
                title={i18n(`modal-${modalVisible}-title`, 'cube', { cubeName })}
                message={i18n(`modal-${modalVisible}-message`, 'cube')}
                onClose={this._closeModal}
            />
        );

    }

    render() {
        const { product, filtersValue } = this.props;
        const { locations } = globalConfig;
        const searchValue = get(filtersValue.text, '0.text');

        let { location } = product;

        if (location === 'reserved' && globalConfig.login === product.operator) {
            location = 'my-reserved';
        }

        const accessModals = {
            'no-access': 'idm',
            'tesseract-unavailable': 'unavailable',
            'tesseract-offline': 'offline'
        };

        const tesseractStatus = get(product, 'access.tesseract.statusId');
        let accessType = get(product, 'access.accessType');

        if (accessType === 'tesseract-unavailable' && tesseractStatus !== 'online') {
            accessType = 'tesseract-offline';
        }

        const canUse = get(product, 'access.canUse', false);
        const isUnavailable = !canUse || locations.unavailable.includes(location);
        const hasBadge = !locations.free.includes(location);

        product.model = product.model || {};

        return (
            <div key={product.id} className={classNames({ location, unavailable: isUnavailable })}>

                <div className={classNames('content')} onClick={this._showProductCardModal}>

                    {!canUse &&
                        <button
                            className="product__unavailable-wrap"
                            name="icon"
                            onClick={() => this.setState({ modalVisible: accessModals[accessType] })}
                        >
                            <a name="icon" className="product__unavailable-icon" />
                        </button>}

                    {canUse && hasBadge && this._getBadge(location)}

                    <div className={classNames('image-wrap')}>
                        <ProductIcon photo={product.model.photo} size="6hq" type="product-android" />
                    </div>

                    <ProductDescription
                        product={product}
                        searchValue={searchValue}
                    />

                    <div className={classNames('control')}>
                        {this._renderButton()}
                    </div>

                </div>

                {this._renderModal()}

            </div>
        );
    }

    static propTypes = {
        product: propTypes.object.isRequired,
        cubeName: propTypes.string.isRequired,
        openCard: propTypes.func.isRequired
    }
}
