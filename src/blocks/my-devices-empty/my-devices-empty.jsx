import React from 'react';
import { cn } from '@bem-react/classname';

import './my-devices-empty.css';

import Icon from '../../common.blocks/icon';

const classNames = cn('my-devices-empty');

const MyDevicesEmpty = () => (
    <div className={classNames()}>

        <div className={classNames('content')}>
            <div className={classNames('title')}>{console.log('my-devices-empty-title')}</div>
            <div className={classNames('tip')}>{console.log('my-devices-empty-tip')}</div>
            <div className={classNames('image-wrap')}>
                <div className={classNames('image')}><Icon type="empty-android" /></div>
            </div>
        </div>

    </div>
);

export default MyDevicesEmpty;
