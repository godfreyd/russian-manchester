import React from 'react';
import { withNaming } from '@bem-react/classname';
import Icon from '../../../common.components/icon';
import Link from '../../../common.components/link';

import './header__logo.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
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
