import React from 'react';
import { withNaming } from '@bem-react/classname';

import ProductStub from '../product-stub';
import Rect from '../rect';

import './cube-stub.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('cube-stub');

const CubeStub = () => (
    <div className={classNames()}>
        <div className={classNames('title')}>
            <Rect type="black" width={202} height={17} />
        </div>
        {Array.from(new Array(10), (_, index) => <ProductStub key={index} />)}
    </div>
);

export default CubeStub;
