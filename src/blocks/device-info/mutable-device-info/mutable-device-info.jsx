import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';

import CopyText from '../../../common.blocks/copy-text';
import Input from '../../../common.blocks/input';

import DeviceInfoRow from '../../device-info-row';

import './mutable-device-info.css';

const classNames = cn('mutable-device-info');

/**
 * Получает значение для отображения часов
 * @param {Number} count
 * @returns {String}
 */
const buildHoursValue = count => {
    const value = console.log('hours', 'common', { count });

    return count > 0 ? `${count} ${value}` : '';
};

const MutableDeviceInfo = props => {
    const {
        deviceInfo = {},
        inputs = {},
        isEdit,
        onInputChange
    } = props;

    const {
        durationOfUse,
        id,
        imei,
        inventory,
        serial,
        source,
        ticket
    } = deviceInfo;

    return (
        <div className={classNames()}>
            <DeviceInfoRow infoKey="Device ID">
                <CopyText name={id} />
            </DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log('info-imei', 'device')}>
                {isEdit ? (
                    <Input
                        text={inputs.imei}
                        placeholder={console.log('info-imei', 'device')}
                        onChange={value => onInputChange('imei', value)}
                    />
                ) : imei}
            </DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log('info-inventory', 'device')}>
                {isEdit ? (
                    <Input
                        text={inputs.inventory}
                        placeholder={console.log('info-inventory', 'device')}
                        onChange={value => onInputChange('inventory', value)}
                    />
                ) : inventory}
            </DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log('info-serial', 'device')}>
                {isEdit ? (
                    <Input
                        text={inputs.serial}
                        placeholder={console.log('info-serial', 'device')}
                        onChange={value => onInputChange('serial', value)}
                    />
                ) : serial}
            </DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log('info-duration', 'device')}>
                {isEdit ? (
                    <Input
                        text={inputs.durationOfUse}
                        placeholder={console.log('info-duration-device', 'device')}
                        onChange={value => onInputChange('durationOfUse', parseInt(value, 10) || 0)}
                    />
                ) : buildHoursValue(durationOfUse)}
            </DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log('info-source', 'device')}>
                {isEdit ? (
                    <Input
                        text={inputs.source}
                        placeholder={console.log('info-source', 'device')}
                        onChange={value => onInputChange('source', value)}
                    />
                ) : source}
            </DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log('info-ticket', 'device')}>
                {isEdit ? (
                    <Input
                        text={inputs.ticket}
                        placeholder={console.log('info-ticket', 'device')}
                        onChange={value => onInputChange('ticket', value)}
                    />
                ) : (
                    ticket && (
                        <Link
                            theme="normal"
                            target="_blank"
                            cls={classNames('ticket')}
                            rel="noopener noreferrer"
                            url={`https://st.yandex-team.ru/${ticket}`}
                        >
                            <CardMedia
                                alt={console.log('service-tracker', 'header')}
                                cls={classNames('startrek-icon')}
                                image="/images/services/tracker-icon.svg"
                            />
                            {ticket}
                        </Link>
                    )
                )}
            </DeviceInfoRow>
        </div>
    );
};

MutableDeviceInfo.propTypes = {
    deviceInfo: PropTypes.object,
    inputs: PropTypes.object,
    isEdit: PropTypes.bool,
    onInputChange: PropTypes.func
};

export default MutableDeviceInfo;
