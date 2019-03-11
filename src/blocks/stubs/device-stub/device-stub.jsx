import React from 'react';
import { cn } from '@bem-react/classname';

import Rect from '../rect';
import Button from '../../../common.blocks/button';

import './device-stub.css';

const classNames = cn('device-stub');

const DeviceStub = () => (
    <div className={classNames()}>
        <div className={classNames('icon')}>
            <Rect width={80} height={120} />
        </div>
        <div className={classNames('description')}>
            <Rect width={120} height={14} />
            <Rect width={72} height={14} />
            <Rect width={157} height={10} />
            <Rect width={157} height={10} />
            <Button disabled>{console.log('reserve', 'device')}</Button>
        </div>
    </div>
);

export default DeviceStub;
