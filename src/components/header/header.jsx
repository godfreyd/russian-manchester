import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import Link from '../../common.components/link';

import HeaderLogo from './__logo';


import i18n from '../i18n';

import './header.css';

const classNames = cn('header');

const Header = ({ withSearch }) => {
    return (
        <header className={classNames()}>
            <HeaderLogo />

            <div className={classNames('nav-menu')}>
                <Link type="nav" navLink url="/">{i18n('products', 'header')}</Link>
            </div>

            <div className={classNames('search')}>
                {withSearch && <div>Моралис</div>}
            </div>

        </header>
    );
};

Header.propTypes = {
    withSearch: PropTypes.bool
};

export default Header;
