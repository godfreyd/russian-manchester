import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import Icon from '../icon';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('product-icon');

const ProductIcon = ({ photo, size = 'orig', type }) => {
    const imgSrc = photo && photo.replace('orig', size);

    return (
        imgSrc ? <img className={classNames()} src={imgSrc} alt={classNames()} /> : <Icon type={type} />
    );
};

ProductIcon.propTypes = {
    photo: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string
};

export default ProductIcon;
