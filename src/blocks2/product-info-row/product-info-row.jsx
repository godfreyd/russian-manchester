import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import EllipsisString from '../../common.blocks2/ellipsis-string';

import './product-info-row.css';

const classNames = cn('product-info-row');

const DeviceInfoRow = props => {
    const { infoKey, children } = props;

    return (
        <div className={classNames()}>
            <div className={classNames('key')}>{infoKey}</div>
            <div className={classNames('value')}>
                {typeof children === 'string' ?
                    <EllipsisString>{children}</EllipsisString> :
                    children
                }
            </div>
        </div>
    );
};

DeviceInfoRow.propTypes = {
    infoKey: PropTypes.string
};

export default DeviceInfoRow;
