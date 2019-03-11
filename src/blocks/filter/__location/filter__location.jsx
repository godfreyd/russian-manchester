import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import find from 'lodash/find';

import Checkbox from '@material-ui/core/Checkbox';

import './filter__location.css';

const classNames = cn('filter');

const LocationFilter = ({ locationsValue, filterChange }) => {

    /**
     * Отправляет событие изменение фильтра по доступности
     *
     * @param {Object} target
     * @returns {void}
     */
    const handleCheckboxChange = ({ target }) => {
        filterChange('locations', target.checked ? [{ locations: 'tesseract' }, { locations: 'unreserved' }] : []);
    };

    const isChecked = Boolean(find(locationsValue, ['locations', 'tesseract']));

    return (
        <div className={classNames('location')}>

            <div className={classNames('area')}>
                <Checkbox
                    name="available"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                >
                Свободные
                </Checkbox>
            </div>

        </div>
    );
};

LocationFilter.propTypes = {
    locationsValue: PropTypes.array,
    filterChange: PropTypes.func.isRequired
};

export default LocationFilter;
