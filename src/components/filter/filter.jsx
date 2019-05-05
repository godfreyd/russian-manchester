import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import DiagonalFilter from './__diagonal';
import FilterStub from '../stubs/filter-stub';
import LocationFilter from './__location';
import PlatformFilterContainer from './__platform';

import './filter.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('filter');

const Filter = ({ filters }) => {
    if (!filters) {
        return <FilterStub />;
    }

    return (
        <div className={classNames()}>

            {Object.keys(filters).length > 0 &&
                <div className={classNames('containers')}>
                    <PlatformFilterContainer />
                    <DiagonalFilter />
                    <LocationFilter />
                </div>
            }

        </div>
    );
};

Filter.propTypes = {
    filters: propTypes.object
};

export default Filter;
