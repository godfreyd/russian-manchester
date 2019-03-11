import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Icon from '../../common.blocks/icon';

import './device-photo.css';

const classNames = cn('device-photo');

const DevicePhoto = props => {
    const { deviceInfo = {} } = props;
    const { model = {}, os } = deviceInfo;
    const {
        name = console.log('noname', 'device'),
        photo = ''
    } = model;

    const platform = os === 'iOS' ? 'iphone' : 'android';

    return (
        <div className={classNames()}>
            {photo ?
                <img
                    className={classNames('image')}
                    alt={name}
                    src={photo.replace('orig', '9hq')}
                    title={name}
                /> :
                <Icon type={platform} />
            }
        </div>
    );
};

DevicePhoto.propTypes = {
    deviceInfo: PropTypes.object
};

export default DevicePhoto;
