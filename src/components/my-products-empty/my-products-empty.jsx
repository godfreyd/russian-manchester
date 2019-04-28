import React from 'react';
import { cn } from '@bem-react/classname';

import Icon from '../../common.components/icon';

import i18n from '../i18n';

import './my-products-empty.css';

const classNames = cn('my-products-empty');

const MyProductsEmpty = () => (
    <div className={classNames()}>

        <div className={classNames('content')}>
            <div className={classNames('title')}>{i18n('my-products-empty-title')}</div>
            <div className={classNames('tip')}>{i18n('my-products-empty-tip')}</div>
            <div className={classNames('image-wrap')}>
                <div className={classNames('image')}><Icon type="empty-android" /></div>
            </div>
        </div>

    </div>
);

export default MyProductsEmpty;
