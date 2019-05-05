import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import i18n from '../i18n';

import Icon from '../../common.components/icon';

import './product-photo.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('product-photo');

const ProductPhoto = props => {
    const { productInfo = {} } = props;
    const { model = {}, os } = productInfo;
    const {
        name = i18n('noname', 'product'),
        photo = ''
    } = model;

    const platform = os === 'iOS' ? 'iphone' : 'android';

    return (
        <div className={classNames()}>
            {photo ?
                <img
                    className={classNames('image')}
                    alt={name}
                    src={photo.replace('orig', '9hq')}
                    title={name}
                /> :
                <Icon type={platform} />
            }
        </div>
    );
};

ProductPhoto.propTypes = {
    productInfo: PropTypes.object
};

export default ProductPhoto;
