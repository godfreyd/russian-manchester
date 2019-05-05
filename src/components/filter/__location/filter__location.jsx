import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import find from 'lodash/find';

import Checkbox from '../../../common.components/checkbox';
import i18n from '../../i18n';
import './filter__location.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('filter');

const LocationFilter = ({ locationsValue, filterChange }) => {

    /**
     * Отправляет событие изменение фильтра по доступности
     *
     * @param {Object} target
     * @returns {void}
     */
    const handleCheckboxChange = ({ target }) => {
        const locations = target.checked ? globalConfig.locations.free : [];
        const locationsFilter = locations.map(location => ({ locations: location }));

        filterChange('locations', locationsFilter);
    };

    const isChecked = Boolean(find(locationsValue, ['locations', 'tesseract']));

    return (
        <div className={classNames('location')}>

            <div className={classNames('area')}>
                <Checkbox
                    name="available"
                    theme="normal"
                    size="m"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                >
                    {i18n('filter-available')}
                </Checkbox>
            </div>

        </div>
    );
};

LocationFilter.propTypes = {
    locationsValue: propTypes.array,
    filterChange: propTypes.func.isRequired
};

export default LocationFilter;
