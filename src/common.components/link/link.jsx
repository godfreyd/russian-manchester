import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { Link as InternalLink, NavLink } from 'react-router-dom';

import './link.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('link');

const Link = ({ url, navLink = false, internal = false, target = '_blank', children, type = 'default', onClick, ...props }) => {
    if (!url) {
        // Ссылка-кнопка
        return (
            <span
                className={classNames({ type })}
                onClick={onClick}
                {...props}
            >
                {children}
            </span>
        );
    }

    if (navLink) {
        // Навигационная ссылка
        return (
            <NavLink
                exact
                to={url}
                className={classNames({ type })}
                activeClassName={classNames({ active: true })}
                {...props}
            >
                {children}
            </NavLink>
        );
    }

    if (internal) {
        // Ссылка на другую страницу приложения
        return (
            <InternalLink
                className={classNames({ type })}
                to={url}
                {...props}
            >
                {children}
            </InternalLink>
        );
    }

    // Внешняя ссылка
    return (
        <a
            className={classNames({ type })}
            href={url}
            rel="noopener noreferrer"
            target={target}
            {...props}
        >
            {children}
        </a>
    );
};

Link.propTypes = {
    url: propTypes.string,
    target: propTypes.string,
    children: propTypes.node.isRequired,
    type: propTypes.string,
    internal: propTypes.bool,
    navLink: propTypes.bool,
    onClick: propTypes.func
};

export default Link;
