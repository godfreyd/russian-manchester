import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import get from 'lodash/get';

import LegoCheckbox from 'lego-on-react/src/components/checkbox/checkbox.react';

const classNames = cn('filter');

const PlatformFiltersGroup = ({ platformName, platformVersions, platformState, onChange }) => {
    const children = ['all', ...platformVersions].map(version => {
        const checked = get(platformState, version);
        const name = `${platformName}_${version}`;

        let className = '';

        if (version !== 'all') {
            className = 'level-2';
        } else if (!checked) {
            className = 'hidden';
        }

        return (
            <div key={name} className={className}>
                <LegoCheckbox
                    name={name}
                    checked={checked}
                    onChange={onChange}
                >
                    {platformName || 'Неизвестно'}
                    {version !== 'all' && version && ` ${version}`}
                </LegoCheckbox>
            </div>
        );
    });

    return <div className={classNames('platform-filters-group')}>{children}</div>;
};

PlatformFiltersGroup.propTypes = {
    platformName: PropTypes.string,
    platformVersions: PropTypes.array.isRequired,
    platformState: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onChange: PropTypes.func.isRequired
};

export default PlatformFiltersGroup;
