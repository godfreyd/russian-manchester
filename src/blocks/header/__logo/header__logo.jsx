import React from 'react';
import { cn } from '@bem-react/classname';
import Icon from '../../../common.blocks/icon';
import Link from '../../../common.blocks/link';

import './header__logo.css';

const classNames = cn('header');

const HeaderLogo = () => (
    <div className={classNames('logo')}>
        <Link target="_self" url="https://yandex.ru">
            <Icon type="yandex-logo" />
        </Link>
        <Link internal url="/">
            <Icon type="hypercube-logo" />
        </Link>
    </div>
);

export default HeaderLogo;
