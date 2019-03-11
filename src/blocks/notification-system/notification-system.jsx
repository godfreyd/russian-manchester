import React from 'react';

import Notifications from 'react-notification-system';

import './notification.css';

const NotificationSystem = () => {
    const _refNotificationsCallback = system => {
        window.globalConfig.notifications = system;
    };

    return <Notifications ref={_refNotificationsCallback} />;
};

export default NotificationSystem;
