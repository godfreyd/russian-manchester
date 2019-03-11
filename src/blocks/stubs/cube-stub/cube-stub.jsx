import React from 'react';
import { cn } from '@bem-react/classname';

import DeviceStub from '../device-stub';
import Rect from '../rect';

import './cube-stub.css';

const classNames = cn('cube-stub');

const CubeStub = () => (
    <div className={classNames()}>
        <div className={classNames('title')}>
            <Rect type="black" width={202} height={17} />
        </div>
        {Array.from(new Array(10), (_, index) => <DeviceStub key={index} />)}
    </div>
);

export default CubeStub;
