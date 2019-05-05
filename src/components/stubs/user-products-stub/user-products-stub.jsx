import React from 'react';
import { withNaming } from '@bem-react/classname';

import Rect from '../rect';

import './user-products-stub.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('user-products-stub');

const UserProductsStub = () => (
    <div className={classNames()}>
        <div className={classNames('title')}>
            <Rect type="black" width={158} height={17} />
        </div>
        <div className={classNames('product')}>
            <Rect width={120} height={18} />
            <Rect width={170} height={14} />
            <Rect width={157} height={10} />
        </div>
    </div>
);

export default UserProductsStub;
