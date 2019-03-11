import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { withRouter } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import get from 'lodash/get';

import Suggest from '../../common.blocks/suggest';
import Highlight from '../../common.blocks/highlight';

import { getQueries } from '../../lib/helpers';

import './search.css';

const classNames = cn('search');

class Search extends React.Component {
    constructor(props) {
        super(props);

        const searchValue = get(props.searchValue, '0.text');

        this.initValue = searchValue || '';

        this._devicesSuggest = debounce(200, props.devicesSuggest);
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
    _hideDevicesContainer() {
        const [deviceContainer] = document.getElementsByClassName('devices__container');

        if (deviceContainer) {
            deviceContainer.classList.add('darkening');
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

        this._hideDevicesContainer();
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
    _fetchDevicesSuggest = text => {
        const { tesseractsValue } = this.props;

        this._devicesSuggest(text, tesseractsValue);
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
                    type="devices-search"
                    inputPlaceholder="Поиск"
                    inputInitValue={this.initValue}
                    results={suggestResults}
                    fetchSuggest={this._fetchDevicesSuggest}
                    getOptionValue={this._getOptionValue}
                    onSelectOption={this._search}
                    onInputChange={this._debounceSearch}
                />
            </div>
        );
    }

    static propTypes = {
        filterChange: PropTypes.func.isRequired,
        suggestResults: PropTypes.array,
        tesseractsValue: PropTypes.array,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
}

export default withRouter(Search);
