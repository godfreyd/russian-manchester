import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { cn } from '@bem-react/classname';
import { compose } from 'redux';

import DeviceCard from '../../blocks/device-card';
import Error404 from '../../common.blocks/errors/error-404';
import Spin from '../../common.blocks/spin';

import UserDevices from '../../blocks/user-devices';
import UserHistory from '../../blocks/user-history';
import UserInfo from '../../blocks/user-info';

import pageTemplate from '../../decorators/page-template';

import './user-page.css';

const classNames = cn('user-page');


const enhance = compose(
    pageTemplate()
);

// @pageTemplate()
class UserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            deviceId: null
        };
        this.HISTORY_ITEMS_PER_PAGE = 6;

        this._closeCard = this._closeCard.bind(this);
        this._showCard = this._showCard.bind(this);
    }

    componentDidMount() {
        const { login, getUserInfo, getUserDeviceList } = this.props;

        getUserInfo(login);
        getUserDeviceList(login);
    }

    componentWillReceiveProps(nextProps) {
        const { modalVisible } = this.state;
        const { location } = nextProps;

        if (location.hash && !modalVisible) {
            this._showCard(location.hash.slice(1));
        }

        if (!location.hash && modalVisible) {
            this._closeCard();
        }
    }

    _showCard(deviceId) {
        this.setState({
            deviceId,
            modalVisible: true
        });
    }

    _closeCard() {
        const { location, history } = this.props;

        history.replace({
            ...location,
            hash: ''
        });

        this.setState({
            deviceId: null,
            modalVisible: false
        });
    }

    render() {
        const { devices = [], inprogress, userInfo, login, error } = this.props;
        const { modalVisible, deviceId } = this.state;

        return (
            <div className={classNames()}>
                <Helmet>
                    <title>User page</title>
                </Helmet>

                {error && <Error404 />}

                {inprogress &&
                    <div className={classNames('center')}>
                        <Spin size="m" progress />
                    </div>
                }

                {!inprogress && userInfo.name &&
                    <div className={classNames('content')}>
                        <UserInfo {...userInfo} />
                        <UserHistory
                            openCard={this._showCard}
                            itemsPerPage={this.HISTORY_ITEMS_PER_PAGE}
                            login={login}
                        />
                        {devices.length > 0 && <UserDevices myDevices={devices} login={login} />}
                    </div>
                }

                {modalVisible && <DeviceCard deviceId={deviceId} closeCard={this._closeCard} />}

            </div>
        );
    }

    static get propTypes() {
        return {
            devices: PropTypes.array,
            userInfo: PropTypes.object,
            login: PropTypes.string.isRequired,
            getUserInfo: PropTypes.func.isRequired,
            getUserDeviceList: PropTypes.func.isRequired,
            history: PropTypes.object.isRequired,
            location: PropTypes.object.isRequired
        };
    }
}

export default enhance(UserPage);
