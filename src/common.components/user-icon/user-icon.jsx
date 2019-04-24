import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Link from '../link';

import './user-icon.css';

const classNames = cn('user-icon');

const UserIcon = ({ login, size = 32, type = 'default' }) => {
    const avatarSrc = `https://center.yandex-team.ru/api/v1/user/${login}/avatar/${size}.jpg`;
    const url = `/user/${login}`;

    return (
        <Link internal url={url}>
            <img className={classNames({ type })} width={size} height={size} src={avatarSrc} alt={login} />
        </Link>
    );
};

UserIcon.propTypes = {
    login: PropTypes.string.isRequired,
    size: PropTypes.number,
    type: PropTypes.string
};

export default UserIcon;
