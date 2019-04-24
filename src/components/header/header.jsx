import React from 'react';
import { cn } from '@bem-react/classname';
import propTypes from 'prop-types';

import Link from '../../common.components/link';

import HeaderLogo from './__logo';
import Search from '../search';

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
                {withSearch && <Search />}
            </div>

        </header>
    );
};

Header.propTypes = {
    withSearch: propTypes.bool
};

export default Header;
