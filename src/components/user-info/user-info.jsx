import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import find from 'lodash/find';
import get from 'lodash/get';

import Link from '../../common.components/link';
import UserIcon from '../../common.components/user-icon';

import i18n from '../i18n';

import './user-info.css';

const classNames = cn('user-info');

const UserInfo = ({ phones, email, location, login, accounts, name }) => {
    const USER_ICON_SIZE = 200;
    const telegramLogin = get(find(accounts, ['type', 'telegram']), 'value');
    const telegramLink = `https://telegram.me/${telegramLogin}`;
    const yambLink = `https://yamb.yandex-team.ru/user/${login}`;
    const tableLink = `https://staff.yandex-team.ru/map/#/table/${location.number}/`;
    const [phone] = phones;

    const contactsFields = [
        login && {
            name: 'staff',
            children: login,
            props: { url: `https://staff.yandex-team.ru/${login}`, type: 'login' }
        },
        login && {
            name: 'yamb',
            children: 'Написать сообщение',
            props: { url: yambLink }
        },
        telegramLogin && {
            name: 'telegram',
            children: telegramLogin,
            props: { url: telegramLink }
        },
        phone && {
            name: 'telephone',
            children: phone,
            props: { url: `tel:${phone}` }
        },
        email && {
            name: 'email',
            children: email,
            props: { url: `mailto:${email}` }
        },
        location.name && {
            name: 'workplace',
            children: `${location.name}, ${location.number}`,
            props: { url: tableLink }
        }
    ];

    return (
        <div className={classNames()}>
            <UserIcon login={login} size={USER_ICON_SIZE} />
            <div>
                <div className={classNames('name')}>{name}</div>
                <div className={classNames('contacts')}>
                    {contactsFields
                        .filter(contact => contact)
                        .map(contact => (
                            <div key={contact.name} className={classNames('contact-row')}>
                                <div className={classNames('key')}>{i18n(contact.name)}</div>
                                <Link {...contact.props}>{contact.children}</Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

UserInfo.propTypes = {
    phones: PropTypes.array,
    email: PropTypes.string,
    location: PropTypes.object,
    login: PropTypes.string,
    accounts: PropTypes.array,
    name: PropTypes.string
};

export default UserInfo;
