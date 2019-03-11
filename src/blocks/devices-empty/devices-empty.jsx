import React from 'react';
import { cn } from '@bem-react/classname';

import './devices-empty.css';

import Icon from '../../common.blocks/icon';

const classNames = cn('devices-empty');

const DevicesEmpty = () => (
    <div className={classNames()}>
        <div className={classNames('icon')}><Icon type={'devices-empty'} /></div>
        <div className={classNames('title')}>{console.log('devices-empty-title')}</div>
        <div className={classNames('tip')}>{console.log('devices-empty-tip')}</div>
    </div>
);

export default DevicesEmpty;
