import React from 'react';
import { cn } from '@bem-react/classname';

import Icon from '../../icon';
import Link from '../../link';

import './error-404.css';

const classNames = cn('error-404');

const Error404 = () => (
    <div className={classNames()}>

        <div className={classNames('image')}>
            <Icon type="error-404" />
        </div>

        <div className={classNames('content')}>
            <div className={classNames('title')}>Страница не найдена</div>
            <div className={classNames('tip')}>
            Вы можете попробовать поискать что вам нужно на <Link url="/" internal>главной странице сайта</Link>.
            </div>
        </div>

    </div>
);

export default Error404;
