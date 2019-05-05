import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withNaming } from '@bem-react/classname';

import pageTemplate from '../../decorators/page-template';

import ProductCard from '../../components/product-card';
import Error404 from '../../common.components/errors/error-404';
import LoadingList from '../../components/loading-list';
import Spin from '../../common.components/spin';
import UserProducts from '../../components/user-products';
import UserInfo from '../../components/user-info';

import i18n from '../../components/i18n';

import './user-page.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('user-page');

@pageTemplate()
export default class UserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            productId: null
        };
        this.HISTORY_ITEMS_PER_PAGE = 6;

        this._closeCard = this._closeCard.bind(this);
        this._showCard = this._showCard.bind(this);
    }

    componentDidMount() {
        const { login, getUserInfo, getUserProductList } = this.props;

        getUserInfo(login);
        getUserProductList(login);
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

    _showCard(productId) {
        this.setState({
            productId,
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
            productId: null,
            modalVisible: false
        });
    }

    render() {
        const { products = [], inprogress, userInfo, login, error } = this.props;
        const { modalVisible, productId } = this.state;

        return (
            <div className={classNames()}>
                <Helmet>
                    <title>{i18n('user-page-title', 'seo', { login })}</title>
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
                        <LoadingList
                            type="history"
                            entityType="user"
                            size="l"
                            id={login}
                            onItemClick={this._showCard}
                        />
                        <UserProducts myProducts={products} login={login} />
                    </div>
                }

                {modalVisible && <ProductCard productId={productId} closeCard={this._closeCard} />}

            </div>
        );
    }

    static propTypes = {
        products: PropTypes.array,
        userInfo: PropTypes.object,
        login: PropTypes.string.isRequired,
        getUserInfo: PropTypes.func.isRequired,
        getUserProductList: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    }
}
