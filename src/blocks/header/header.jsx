import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './header.css';

const classNames = cn('header');

const Header = ({ withSearch }) => {
    return (
        <header className={classNames()}>

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
