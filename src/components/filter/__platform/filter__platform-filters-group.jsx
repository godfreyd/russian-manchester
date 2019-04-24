import React from 'react';
import propTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import get from 'lodash/get';

import Checkbox from '../../../common.components/checkbox';

import i18n from '../../i18n';

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
                <Checkbox
                    name={name}
                    checked={checked}
                    onChange={onChange}
                >
                    {platformName || i18n('undefined')}
                    {version !== 'all' && version && ` ${version}`}
                </Checkbox>
            </div>
        );
    });

    return <div className={classNames('platform-filters-group')}>{children}</div>;
};

PlatformFiltersGroup.propTypes = {
    platformName: propTypes.string,
    platformVersions: propTypes.array.isRequired,
    platformState: propTypes.oneOfType([propTypes.array, propTypes.object]),
    onChange: propTypes.func.isRequired
};

export default PlatformFiltersGroup;
