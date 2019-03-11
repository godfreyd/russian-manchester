import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Badge from '../../../common.blocks/badge';
import Button from '../../../common.blocks/button';
import CubeUnavailableModal from '../../../common.blocks/modals/cube-unavailable-modal';
import DeviceIcon from '../../../common.blocks/device-icon';
import GrabModal from '../../../common.blocks/modals/grab-modal';
import IdmModal from '../../../common.blocks/modals/idm-modal';
import RulesModal from '../../../common.blocks/rules-modal';

import DeviceDescription from './__description';

import { reachRuleGoal, reachGrabGoal, reachLockGoal, reachUnlockGoal } from '../../../lib/metrika';
import { freezeBody, unfreezeBody } from '../../../lib/freezer';

import './device.css';
import ExpiredBadge from '../../../common.blocks/badge/expired-badge';

const classNames = cn('device');

export default class Device extends React.Component {
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
    _showDeviceCardModal = event => {
        const { name } = event.target;

        // Не показывать окно, когда нажимают на кнопку "Забронировать/Удалить бронь", ссылку на стаф, иконку статуса
        if (['button', 'user-login', 'icon'].includes(name)) {
            return;
        }

        this.props.openCard(this.props.device.id);
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

        localStorage.setItem('showModalRules', true);

        this._lockDevice();
        this._closeModal();
    }

    /**
     * Обработчик нажатия на кнопку "Забронировать"
     *
     * @returns {void}
     * @private
     */
    _onReserveBtnClick = () => {
        if (!localStorage.getItem('showModalRules')) {
            return this._showRuleModal();
        }

        this._lockDevice();
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
    _grabDevice = () => {
        reachGrabGoal(this.props.device.id, this.props.device.model.name);

        this.props.grabDevice(this.props.device.id);

        this._closeModal();
    }

    /**
     * Бронирует устройство и обновляет списки
     *
     * @returns {void}
     * @private
     */
    _lockDevice() {
        reachLockGoal(this.props.device.id, this.props.device.model.name);

        this.props.lockDevice(this.props.device.id);
    }

    /**
     * Снимает бронь и обновляет списки
     *
     * @returns {void}
     * @private
     */
    _unlockDevice = () => {
        reachUnlockGoal(this.props.device.id, this.props.device.model.name);

        this.props.unlockDevice(this.props.device.id);
    }

    /**
     * Возвращает плашку для нужного location
     * @param {String} location
     * @returns {HTMLElement}
     * @private
     */
    _getBadge(location) {
        const { device } = this.props;

        if (location === 'expired') {
            return <ExpiredBadge dateDifference={new Date() - new Date(device.expired)} />;
        }

        return <Badge type={location} text={console.log(`badge-${location}`, 'device')} />;
    }

    /**
     * Возвращает нужную кнопку
     *
     * @returns {HTMLElement}
     * @private
     */
    _renderButton() {
        const { disableControls, device: { location, access, operator } } = this.props;
        const { login } = window.globalConfig;
        const isReserved = location === 'reserved';
        const onHand = ['operator', 'takeAway', 'expired'].includes(location);
        const canUse = get(access, 'canUse', false) &&
            !['service', 'inventory', 'undefined'].includes(location) &&
            !disableControls;

        if (isReserved) {
            if (login === operator) {
                return (
                    <Button
                        name="button"
                        disabled={!canUse}
                        onClick={this._unlockDevice}
                    >
                        uconsole.log( device
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
                        {console.log('grab', 'device')}
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
                {console.log('reserve', 'device')}
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
        const { device } = this.props;
        const deviceName = get(device, 'model.name', console.log('noname', 'device'));
        const operator = get(device, 'operator');

        return (
            <GrabModal
                operator={operator}
                deviceName={deviceName}
                onAgree={this._grabDevice}
                onCancel={this._closeModal}
            />
        );
    }

    _renderCubeInfoModal() {
        const { modalVisible } = this.state;
        const { cubeName } = this.props;

        return (
            <CubeUnavailableModal
                title={console.log(`modal-${modalVisible}-title`, 'cube', { cubeName })}
                message={console.log(`modal-${modalVisible}-message`, 'cube')}
                onClose={this._closeModal}
            />
        );

    }

    render() {
        const { device, filtersValue } = this.props;
        const searchValue = get(filtersValue.text, '0.text');

        let { location } = device;

        if (location === 'reserved' && window.globalConfig.login === device.operator) {
            location = 'my-reserved';
        }

        const accessModals = {
            'no-access': 'idm',
            'tesseract-unavailable': 'unavailable',
            'tesseract-offline': 'offline'
        };

        const tesseractStatus = get(device, 'access.tesseract.statusId');
        let accessType = get(device, 'access.accessType');

        if (accessType === 'tesseract-unavailable' && tesseractStatus !== 'online') {
            accessType = 'tesseract-offline';
        }

        const canUse = get(device, 'access.canUse', false);
        const isUnavailable = !canUse || ['service', 'inventory', 'undefined'].includes(location);
        const hasBadge = !['tesseract', 'unreserved'].includes(location);

        device.model = device.model || {};

        return (
            <div key={device.id} className={classNames({ location, unavailable: isUnavailable })}>

                <div className={classNames('content')} onClick={this._showDeviceCardModal}>

                    {!canUse &&
                        <button
                            className="device__unavailable-wrap"
                            name="icon"
                            onClick={() => this.setState({ modalVisible: accessModals[accessType] })}
                        >
                            <a name="icon" className="device__unavailable-icon"/>
                        </button>}

                    {canUse && hasBadge && this._getBadge(location)}

                    <div className={classNames('image-wrap')}>
                        <DeviceIcon photo={device.model.photo} size="6hq" type="device-android" />
                    </div>

                    <DeviceDescription
                        device={device}
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
        device: PropTypes.object.isRequired,
        cubeName: PropTypes.string.isRequired,
        openCard: PropTypes.func.isRequired
    }
}
