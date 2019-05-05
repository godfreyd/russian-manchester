import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import PlatformFiltersGroup from './filter__platform-filters-group';

import i18n from '../../i18n';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('filter');

const PlatformFilter = ({ names, status, platforms, onChange }) => {
    return (
        <div className={classNames('platform')}>

            <div className={classNames('title')}>{i18n('filter-os')}</div>
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
    names: propTypes.array.isRequired,
    status: propTypes.object.isRequired,
    platforms: propTypes.object.isRequired,
    onChange: propTypes.func.isRequired
};

export default PlatformFilter;
