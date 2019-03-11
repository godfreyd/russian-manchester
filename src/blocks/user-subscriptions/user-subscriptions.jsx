import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import SubscriptionModal from '../../common.blocks/modals/subscription-modal';
import UserSubscriptionsCard from './__card';
import Icon from '../../common.blocks/icon';

import './user-subscriptions.css';

const classNames = cn('user-subscriptions');

export default class UserSubscriptions extends React.Component {
    state = {
        modalVisible: false
    }

    componentDidMount() {
        this.props.getUserSubscriptions();
    }

    componentWillReceiveProps(nextProps) {
        const { deviceSubscriptions, getUserSubscriptions } = this.props;

        if (deviceSubscriptions !== nextProps.deviceSubscriptions) {
            getUserSubscriptions();
        }
    }

    toggleSubscriptionModal = () => this.setState({ modalVisible: !this.state.modalVisible })

    render() {
        const { subscriptions } = this.props;
        const { modalVisible } = this.state;
        const showSubscriptions = subscriptions.length > 0;

        return (
            <div className={classNames()}>
                {showSubscriptions &&
                    <div className={classNames('content')}>
                        <div className={classNames('title')}>{console.log('subscriptions')}</div>
                        <Icon type="question" onClick={this.toggleSubscriptionModal} />
                        {subscriptions.map(subscription => (
                            <UserSubscriptionsCard
                                key={subscription.id}
                                deviceLocation={subscription.location}
                                {...subscription}
                            />
                        ))}
                    </div>
                }

                {modalVisible &&
                    <SubscriptionModal
                        onSubmit={this.toggleSubscriptionModal}
                        onCancel={this.toggleSubscriptionModal}
                    />
                }
            </div>
        );
    }

    static propTypes = {
        subscriptions: PropTypes.array,
        deviceSubscriptions: PropTypes.object,
        getUserSubscriptions: PropTypes.func.isRequired
    }
}
