import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { withRouter } from 'react-router-dom';

import { reachUnlockGoal } from '../../../lib/metrika';

import Badge from '../../../common.blocks/badge';
import ExpiredBadge from '../../../common.blocks/badge/expired-badge';
import Link from '../../../common.blocks/link';

import './user-devices__device.css';

const classNames = cn('user-devices');

class Device extends React.PureComponent {

    /**
     * Обработчик нажатия на девайс в колонке устройств
     *
     * @returns {void}
     * @private
     */
    _showDeviceCardModal = () => {
        const { device, history, location } = this.props;

        history.replace({
            ...location,
            hash: `#${device.id}`
        });
    }

    /**
     * Снимает бронь устройства при нажатии на кноку "Удалить"
     *
     * @returns {void}
     * @private
     */
    _unlockDevice = () => {
        const { device: { id, model }, unlockDevice } = this.props;

        reachUnlockGoal(id, model);
        unlockDevice(id);
    }

    /**
     * Возвращает нужный бейджик устройства
     *
     * @returns {ReactElement}
     * @private
     */
    _getBadge = () => {
        const { device } = this.props;
        const dateDifference = new Date(device.expired) - new Date();
        let type = device.location;

        if (type === 'reserved') {
            const minutes = Math.floor(dateDifference / (60 * 1000));

            return <Badge type="my-reserved" text={`Забронировано на ${ minutes }`} />;
        }

        if (dateDifference <= 0) {
            type = 'need-return';
        }

        if (type === 'expired') {
            return <ExpiredBadge dateDifference={-dateDifference} />;
        }

        return <Badge type={type} text={`status-${type}`} />;
    }

    render() {
        const { device } = this.props;
        const tesseract = get(device, 'tesseract.name') || 'undefined';
        const deviceModel = get(device, 'model') || 'noname device';

        return (
            <div className={classNames('device')}>

                <div className={classNames('device-status')}>
                    {this._getBadge()}

                    {device.location === 'reserved' &&
                        <Link onClick={this._unlockDevice}>
                            my-devices-delete
                        </Link>
                    }
                </div>

                <div className={classNames('device-description')} onClick={this._showDeviceCardModal}>
                    <div className={classNames('device-title')} title={deviceModel}>
                        {deviceModel}
                    </div>
                    <div className={classNames('device-info')}>
                        {tesseract} {device.slot && ` → ${device.slot}`}
                    </div>
                </div>
            </div>
        );
    }

    static propTypes = {
        device: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        unlockDevice: PropTypes.func.isRequired
    }
}

export default withRouter(Device);
