import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import CreateCube from '../create-cube';
import MyProductsList from '../my-products-list';
import MyProductsEmpty from '../my-products-empty';
import NotificationsBanner from '../notifications-banner';
import UserSubscriptions from '../user-subscriptions';

import i18n from '../i18n';

import './user-products.css';

const classNames = cn('user-products');

export default class UserProducts extends React.PureComponent {
    componentWillReceiveProps(nextProps) {
        if (this.props.productActionInprogress && this.props.productActionInprogress !== nextProps.productActionInprogress) {
            // Если конец действия с девайсом - перезапрашиваем список
            this.props.getMyProductList();
        }
    }

    render() {
        const { myProducts, login, createCubeVisible } = this.props;

        return (
            <div className={classNames()}>

                <div className={classNames('title')}>{i18n('products')}</div>
                {myProducts.length > 0 ?
                    <MyProductsList products={myProducts} /> :
                    <MyProductsEmpty />
                }
                {globalConfig.login === login && <UserSubscriptions />}
                <NotificationsBanner />
                {createCubeVisible && <CreateCube />}

            </div>
        );
    }

    static propTypes = {
        myProducts: PropTypes.array.isRequired,
        login: PropTypes.string.isRequired,
        createCubeVisible: PropTypes.bool,
        productActionInprogress: PropTypes.bool.isRequired
    }
}
