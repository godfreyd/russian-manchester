import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Icon from '../../common.components/icon';
import SubscriptionModal from '../../common.components/modals/subscription-modal';

import UserSubscriptionsCard from './__card';

import i18n from '../i18n';

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
        const { productSubscriptions, getUserSubscriptions } = this.props;

        if (productSubscriptions !== nextProps.productSubscriptions) {
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
                        <div className={classNames('title')}>{i18n('subscriptions')}</div>
                        <Icon type="question" onClick={this.toggleSubscriptionModal} />
                        {subscriptions.map(subscription => (
                            <UserSubscriptionsCard
                                key={subscription.id}
                                productLocation={subscription.location}
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
        productSubscriptions: PropTypes.object,
        getUserSubscriptions: PropTypes.func.isRequired
    }
}
