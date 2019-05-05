import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { withRouter } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import get from 'lodash/get';

import { getQueries } from '../../lib/helpers';

import Suggest from '../../common.components/suggest';
import Highlight from '../../common.components/highlight';

import i18n from '../i18n';

import './search.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('search');

class Search extends React.Component {
    constructor(props) {
        super(props);

        const searchValue = get(props.searchValue, '0.text');

        this.initValue = searchValue || '';

        this._productsSuggest = debounce(200, props.productsSuggest);
        this._debounceSearch = debounce(1000, this._search);
    }

    componentWillReceiveProps(nextProps) {
        const { location: { pathname }, filterChange } = this.props;
        const nextLocation = nextProps.location;
        const searchPathname = '/search';

        // Сбрасываем поиск при смене местоположения
        if (pathname === searchPathname && nextLocation.pathname !== searchPathname) {
            filterChange('text', []);
        }

        // Инициируем поиск при навигации по истории браузера
        if (pathname !== searchPathname && nextLocation.pathname === searchPathname) {
            const { text } = getQueries(nextLocation);

            if (text) {
                filterChange('text', [{ text }]);
            }
        }
    }

    /**
     * Затемняем контейнер с девайсами при поиске
     *
     * @returns {void}
     * @private
     */
    _hideProductsContainer() {
        const [productContainer] = document.getElementsByClassName('products__container');

        if (productContainer) {
            productContainer.classList.add('darkening');
        }
    }

    /**
     * Отправляет запрос с поиском
     *
     * @param {String} [text]
     * @returns {void}
     * @private
     */
    _search = text => {
        const { history, filterChange } = this.props;
        const query = text ? [{ text }] : [];
        const nextHistory = text ? {
            pathname: '/search',
            search: `?text=${text}`
        } : '/';

        this._hideProductsContainer();
        history.replace(nextHistory);
        filterChange('text', query);
    }

    /**
     * Запрашивает новый саджест для поиска
     *
     * @param {String} text
     * @returns {void}
     * @private
     */
    _fetchProductsSuggest = text => {
        const { tesseractsValue } = this.props;

        this._productsSuggest(text, tesseractsValue);
    }

    /**
     * Отображение одной опции саджеста
     *
     * @param {String} option Текст опции саджеста
     * @param {String} value Введенное значение в инпут
     * @returns {ReactElement}
     * @private
     */
    _getOptionValue(option, value) {
        return (<Highlight type="search" text={value} word={option} />);
    }

    render() {
        const { suggestResults } = this.props;

        return (
            <div className={classNames()}>
                <Suggest
                    type="products-search"
                    inputPlaceholder={i18n('products-search')}
                    inputInitValue={this.initValue}
                    results={suggestResults}
                    fetchSuggest={this._fetchProductsSuggest}
                    getOptionValue={this._getOptionValue}
                    onSelectOption={this._search}
                    onInputChange={this._debounceSearch}
                />
            </div>
        );
    }

    static propTypes = {
        filterChange: propTypes.func.isRequired,
        suggestResults: propTypes.array,
        tesseractsValue: propTypes.array,
        location: propTypes.object.isRequired,
        history: propTypes.object.isRequired
    }
}

export default withRouter(Search);
