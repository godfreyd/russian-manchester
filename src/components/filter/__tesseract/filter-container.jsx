import React from 'react';
import propTypes from 'prop-types';
import flatten from 'lodash/flatten';

import OfficeFilter from './filter__office';
import TesseractFilter from './filter__tesseract';

import './filter__tesseract.css';

export default class TesseractFilterContainer extends React.Component {
    state = {
        showAllOptions: false
    }

    /**
     * Обработчик нажатий на кнопку: "Все города"/"Свернуть"
     *
     * @returns {void}
     * @private
     */
    _handleMoreBtnClick = () => {
        this.setState({ showAllOptions: !this.state.showAllOptions });
    }

    /**
     * Отправляет событие изменения фильтра по местоположению
     *
     * @returns {void}
     * @private
     */
    _handleOfficeFilterChange = () => {
        const { filterChange, anotherOffices, homeOffices } = this.props;
        const allTesseracts = Object.values(anotherOffices)
            .concat(Object.values(homeOffices));
        const query = flatten(allTesseracts)
            .filter(cube => cube.isChecked)
            .map(cube => ({ tesseracts: cube.id }));

        filterChange('tesseracts', query);
    }

    /**
     * Возвращает фильтры по офисам
     *
     * @param {Array} list
     * @returns {Array}
     * @private
     */
    _getOfficeFilters(list) {
        return Object
            .keys(list)
            .map(office => (
                <OfficeFilter
                    key={office}
                    officeName={office}
                    onChange={this._handleOfficeFilterChange}
                    cubes={list[office]}
                />
            ));
    }

    render() {
        const { showAllOptions } = this.state;
        const { anotherOffices, homeOffices } = this.props;

        return (
            <TesseractFilter
                showAll={showAllOptions}
                showButton={Boolean(anotherOffices)}
                toggleMore={this._handleMoreBtnClick}
            >

                {homeOffices && this._getOfficeFilters(homeOffices)}
                {anotherOffices && showAllOptions && this._getOfficeFilters(anotherOffices)}

            </TesseractFilter>
        );
    }

    static propTypes = {
        filterChange: propTypes.func.isRequired,
        anotherOffices: propTypes.object,
        homeOffices: propTypes.object
    }
}
