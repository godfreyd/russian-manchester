import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import PlatformFiltersGroup from './filter__platform-filters-group';

const classNames = cn('filter');

const PlatformFilter = ({ names, status, platforms, onChange }) => {
    return (
        <div className={classNames('platform')}>

            <div className={classNames('title')}>Операционная система</div>
            {names.map(name => (
                <PlatformFiltersGroup
                    key={name}
                    onChange={onChange}
                    platformName={name}
                    platformState={status[name]}
                    platformVersions={platforms[name]}
                />
            ))}

        </div>
    );
};

PlatformFilter.propTypes = {
    names: PropTypes.array.isRequired,
    status: PropTypes.object.isRequired,
    platforms: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default PlatformFilter;
