import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import MyDevicesList from '../my-devices-list';
import MyDevicesEmpty from '../my-devices-empty';
import UserSubscriptions from '../user-subscriptions';

import './user-devices.css';

const classNames = cn('user-devices');

export default class UserDevices extends React.PureComponent {
    componentWillReceiveProps(nextProps) {
        if (this.props.deviceActionInprogress &&
            this.props.deviceActionInprogress !== nextProps.deviceActionInprogress) {
            // Если конец действия с девайсом - перезапрашиваем список
            this.props.getMyDeviceList();
        }
    }

    render() {
        const { myDevices, login } = this.props;

        return (
            <div className={classNames()}>

                <div className={classNames('title')}>{console.log('devices')}</div>
                {myDevices.length > 0 ?
                    <MyDevicesList devices={myDevices} /> :
                    <MyDevicesEmpty />
                }
                {window.globalConfig.login === login && <UserSubscriptions />}

            </div>
        );
    }

    static propTypes = {
        myDevices: PropTypes.array.isRequired,
        login: PropTypes.string.isRequired,
        deviceActionInprogress: PropTypes.bool.isRequired
    }
}
