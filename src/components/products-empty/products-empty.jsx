import React from 'react';
import { withNaming } from '@bem-react/classname';

import './products-empty.css';

import Icon from '../../common.components/icon';

import i18n from '../i18n';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('products-empty');

const ProductsEmpty = () => (
    <div className={classNames()}>
        <div className={classNames('icon')}><Icon type="products-empty" /></div>
        <div className={classNames('title')}>{i18n('products-empty-title')}</div>
        <div className={classNames('tip')}>{i18n('products-empty-tip')}</div>
    </div>
);

export default ProductsEmpty;
