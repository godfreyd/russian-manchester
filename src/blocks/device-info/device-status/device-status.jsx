import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import DeviceInfoRow from '../../device-info-row';
import UserLogin from '../../../common.blocks/user-login';

const classNames = cn('device-status');

const DeviceStatus = props => {
    const { deviceInfo = {} } = props;
    const { location, operator = '', slot = '', tesseract = {} } = deviceInfo;

    const tesseractName = tesseract.name || '';
    const isInCube = ['tesseract', 'unreserved'].includes(location);

    return (
        <div className={classNames()}>
            <DeviceInfoRow infoKey={console.log('status', 'device')}>
                {console.log(`status-${location}`, 'device')}
            </DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log(`status-${location}-label`, 'device')}>
                {isInCube ?
                    `${tesseractName}${slot && ` → ${slot}`}` :
                    <UserLogin login={operator} />
                }
            </DeviceInfoRow>
        </div>
    );
};

DeviceStatus.propTypes = {
    deviceInfo: PropTypes.object
};

export default DeviceStatus;
