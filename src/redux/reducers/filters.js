import _ from 'lodash';
import ls from 'local-storage';
import { handleActions } from 'redux-actions';

import { getQueries } from '../../lib/helpers';
import {
    EVENT_FETCH_FILTERS,
    EVENT_FETCH_FILTERS_SUCCESS,
    EVENT_FETCH_FILTERS_FAIL,
    EVENT_CHANGE_FILTERS
} from '../actions/filters';

export default handleActions({
    [EVENT_FETCH_FILTERS]: fetchFilters,
    [EVENT_FETCH_FILTERS_SUCCESS]: fetchFiltersSuccess,
    [EVENT_FETCH_FILTERS_FAIL]: fetchFiltersFail,
    [EVENT_CHANGE_FILTERS]: changeFilters
}, {
    filters: undefined,
    filtersValue: initFiltersValue(),
    inprogress: false,
    error: undefined
});

function initFilter(values, defaults) {
    return _(values)
        .groupBy(Object.keys)
        .defaultsDeep(defaults)
        .pick(Object.keys(defaults))
        .value();
}

function initFiltersValue() {
    const defaultStorageFilters = {
        platforms: [],
        tesseracts: [],
        locations: [],
        diagonalMin: [],
        diagonalMax: []
    };
    const defaultQueriesFilters = {
        text: []
    };

    const storageValue = ls.get('filter');
    const storageFiltersValue = initFilter(storageValue, defaultStorageFilters);

    const queries = typeof location === 'undefined' ? {} : getQueries(location);
    const queriesValue = Object.keys(queries).reduce((result, key) => {
        result[key] = { [key]: queries[key] };

        return result;
    }, {});
    const queriesFiltersValue = initFilter(queriesValue, defaultQueriesFilters);

    const filtersValue = Object.assign({}, storageFiltersValue, queriesFiltersValue);

    ls.set('filter', _.flatten(Object.values(filtersValue)));

    return filtersValue;
}

function fetchFilters(state) {
    return {
        ...state,
        inprogress: true,
        error: undefined
    };
}

function fetchFiltersSuccess(state, action) {
    return {
        ...state,
        filters: action.payload,
        inprogress: false,
        error: undefined
    };
}

function fetchFiltersFail(state, action) {
    return {
        ...state,
        filters: {},
        inprogress: false,
        error: action.payload
    };
}

function changeFilters(state, { payload }) {
    const filtersValue = {
        ...state.filtersValue,
        [payload.field]: payload.value
    };

    ls.set('filter', _.flatten(Object.values(filtersValue)));

    return {
        ...state,
        filtersValue
    };
}
