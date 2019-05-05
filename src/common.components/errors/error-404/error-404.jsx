import React from 'react';
import { withNaming } from '@bem-react/classname';

import Icon from '../../icon';
import Link from '../../link';

import i18n from '../../../components/i18n';

import './error-404.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('error-404');

const Error404 = () => (
    <div className={classNames()}>

        <div className={classNames('image')}>
            <Icon type="error-404" />
        </div>

        <div className={classNames('content')}>
            <div className={classNames('title')}>{i18n('404-title', 'error')}</div>
            <div className={classNames('tip')}>
                {i18n('404-tip', 'error')} <Link url="/" internal>{i18n('404-tip-link', 'error')}</Link>
            </div>
        </div>

    </div>
);

export default Error404;
