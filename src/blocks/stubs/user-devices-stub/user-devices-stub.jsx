import React from 'react';
import { cn } from '@bem-react/classname';

import Rect from '../rect';

import './user-devices-stub.css';

const classNames = cn('user-devices-stub');

const UserDevicesStub = () => (
    <div className={classNames()}>
        <div className={classNames('title')}>
            <Rect type="black" width={158} height={17} />
        </div>
        <div className={classNames('device')}>
            <Rect width={120} height={18} />
            <Rect width={170} height={14} />
            <Rect width={157} height={10} />
        </div>
    </div>
);

export default UserDevicesStub;
