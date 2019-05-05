import React from 'react';
import { withNaming } from '@bem-react/classname';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import flatten from 'lodash/flatten';

import pageTemplate from '../../decorators/page-template';
import { reachWizardGoal } from '../../lib/metrika';

import Filter from '../../components/filter';
import Products from '../../components/products';
import UserProducts from '../../components/user-products';
import ProductCard from '../../components/product-card';
import Wizard from '../../common.components/wizard';
import UserProductsStub from '../../components/stubs/user-products-stub';

import './main-page.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('main-page');
const HAS_SEARCH = true;

const enhance = compose(
    pageTemplate(HAS_SEARCH)
);

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this._init();
        this._bindHandles();
    }

    _init() {
        this.state = {
            modalVisible: null,
            productId: null
        };
    }

    _bindHandles() {
        this._closeCard = this._closeCard.bind(this);
        this._closeWizardModal = this._closeWizardModal.bind(this);
        this._showCard = this._showCard.bind(this);
    }


    componentDidMount() {
        const { localStorage } = this.props;

        const isShowWizard = localStorage.getItem('showWizard');

        this.props.updateProductList(flatten(Object.values(this.props.filtersValue)));
        this.props.getFilters();
        this.props.getMyProductList();

        if (!isShowWizard) {
            return this.setState({ modalVisible: 'wizard' });
        }

        if (location.hash !== '') {
            this._openCardFromHash();
        }
    }

    componentWillReceiveProps(nextProps) {
        const { modalVisible } = this.state;

        if (location.hash && !modalVisible) {
            this._openCardFromHash();
        }

        // if (this.props.tesseractInprogress && !nextProps.tesseractInprogress) {
        //     this.props.updateProductList(flatten(Object.values(this.props.filtersValue)));
        //     this.props.getFilters();
        // }

        if (!location.hash && modalVisible === 'card') {
            this._closeModal();
        }
    }

    /**
     * Открывает карточку девайса со значением хэша
     *
     * @returns {void}
     * @private
     */
    _openCardFromHash() {
        this.setState({
            productId: location.hash.slice(1),
            modalVisible: 'card'
        });
    }

    /**
     * Открывает карточку девайса
     *
     * @param {Number} id
     * @returns {void}
     * @private
     */
    _showCard(id) {
        const { location, history } = this.props;

        history.replace({
            ...location,
            hash: `#${id}`
        });
        this.setState({
            productId: id,
            modalVisible: 'card'
        });
    }

    /**
     * Закрывает карточку девайса
     *
     * @returns {void}
     * @private
     */
    _closeCard() {
        const { location, history } = this.props;

        history.replace({
            ...location,
            hash: ''
        });
        this._closeModal();
    }

    /**
     * Закрывает модальные окна
     *
     * @returns {void}
     * @private
     */
    _closeModal() {
        this.setState({
            productId: null,
            modalVisible: null
        });
    }

    /**
     * Закрывает визард
     *
     * @param {Number} closePageNumber
     * @returns {void}
     * @private
     */
    _closeWizardModal(closePageNumber) {
        reachWizardGoal(closePageNumber);

        const { localStorage } = this.props;

        localStorage.setItem('showWizard', true);

        this._closeModal();

        if (location.hash !== '') {
            this._openCardFromHash();
        }
    }


    render() {
        const { modalVisible, productId } = this.state;
        const { myProducts } = this.props;
        return (
            <div className={classNames()}>
                <div className={classNames('content')}>
                    <Filter />
                    <Products openCard={this._showCard} />
                    {myProducts ?
                        <UserProducts
                            myProducts={myProducts}
                            login={globalConfig.login}
                            createCubeVisible={globalConfig.userPermissions.isAdmin}
                        /> :
                        <UserProductsStub />
                    }

                    {modalVisible === 'card' && <ProductCard productId={productId} closeCard={this._closeCard} />}

                    {modalVisible === 'wizard' && <Wizard closeModal={this._closeWizardModal} />}

                </div>
            </div>
        );
    }
}

const WrappedComponent = withRouter(MainPage);


export default enhance(WrappedComponent);
