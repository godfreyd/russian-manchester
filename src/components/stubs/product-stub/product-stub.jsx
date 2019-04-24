import React from 'react';
import { cn } from '@bem-react/classname';

import Button from '../../../common.components/button';

import Rect from '../rect';

import i18n from '../../i18n';

import './product-stub.css';

const classNames = cn('product-stub');

const ProductStub = () => (
    <div className={classNames()}>
        <div className={classNames('icon')}>
            <Rect width={80} height={120} />
        </div>
        <div className={classNames('description')}>
            <Rect width={120} height={14} />
            <Rect width={72} height={14} />
            <Rect width={157} height={10} />
            <Rect width={157} height={10} />
            <Button disabled>{i18n('reserve', 'product')}</Button>
        </div>
    </div>
);

export default ProductStub;
