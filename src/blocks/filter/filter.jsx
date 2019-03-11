import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import TesseractFilterContainer from './__tesseract';
import PlatformFilterContainer from './__platform';
import LocationFilter from './__location';
import DiagonalFilter from './__diagonal';
import FilterStub from '../stubs/filter-stub';

import './filter.css';

const classNames = cn('filter');

const Filter = ({ filters }) => {
    if (!filters) {
        return <FilterStub />;
    }

    return (
        <div className={classNames()}>

            {Object.keys(filters).length > 0 &&
                <div className={classNames('containers')}>
                    <TesseractFilterContainer />
                    <PlatformFilterContainer />
                    <DiagonalFilter />
                    <LocationFilter />
                </div>
            }

        </div>
    );
};

Filter.propTypes = {
    filters: PropTypes.object
};

export default Filter;
