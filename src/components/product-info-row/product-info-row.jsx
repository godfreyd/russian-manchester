import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import EllipsisString from '../../common.components/ellipsis-string';

import './product-info-row.css';

const classNames = cn('product-info-row');

const ProductInfoRow = props => {
    const { infoKey, required, children } = props;

    return (
        <div className={classNames()}>
            <div className={classNames('key')}>
                <span className={classNames('label', { required })}>
                    {infoKey}
                </span>
            </div>
            <div className={classNames('value')}>
                {typeof children === 'string' ?
                    <EllipsisString>{children}</EllipsisString> :
                    children
                }
            </div>
        </div>
    );
};

ProductInfoRow.propTypes = {
    infoKey: PropTypes.string,
    required: PropTypes.bool
};

export default ProductInfoRow;
