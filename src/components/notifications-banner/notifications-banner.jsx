import React from 'react';
import { cn } from '@bem-react/classname';

import Banner from '../../common.components/banner';
import Button from '../../common.components/button';
import Icon from '../../common.components/icon';

import i18n from '../i18n';

import '../../common.components/link/link.css';

import './notifications-banner.css';

const classNames = cn('notifications-banner');

const NotificationsBanner = () => (
    <Banner
        title={i18n('notifications-banner-title', 'common')}
        name="notifications-banner"
    >
        <p
            className={classNames('text')}
            dangerouslySetInnerHTML={{
                __html: i18n('notifications-banner-text', 'common')
            }}
        />
        <Button
            action
            width="max"
            type="link"
            target="_blank"
            cls={classNames('button')}
            url={globalConfig.notify.telegram}
        >
            <div className={classNames('button-content')}>
                <Icon type="telegram" />
                {i18n('connect', 'common')}
            </div>
        </Button>
    </Banner>
);

export default NotificationsBanner;
