import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import Link from '../../common.blocks/link';
import UserIcon from '../../common.blocks/user-icon';
import HeaderLogo from './__logo';
import Search from '../search';
import './header.css';

const classNames = cn('header');

const Header = ({ withSearch }) => {

    const reportProblemForm = process.env.REACT_APP_FEEDBACK_FORM
    const faqPage = process.env.REACT_APP_FAQ_PAGE;

    const login = 'godfreyd';

    return (
        <header className={classNames()}>
            <HeaderLogo />

            <div className={classNames('nav-menu')}>
                <Link type="nav" navLink url="/">Каталог</Link>
                <Link type="nav" navLink url="/cargo">Сборные грузы</Link>
            </div>

            <div className={classNames('search')}>
                {withSearch && <Search />}
            </div>

            <div className={classNames('help-links')}>
                <Link url={faqPage}>Faq
                </Link>

                <Link url={reportProblemForm}>
                    Сообщить о проблеме
                </Link>
            </div>

            <div className={classNames('user')}>
                <UserIcon type="round" login={login} />
            </div>

        </header>
    );
};

Header.propTypes = {
    withSearch: PropTypes.bool
};

export default Header;
