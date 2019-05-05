import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import omit from 'lodash/omit';

import Button from '../../common.components/button';

import i18n from '../i18n';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('product-button');

const ownProps = ['i18nKey'];

const ProductButton = props => {
    const { i18nKey } = props;
    const buttonProps = omit(props, ownProps);

    return (
        <div className={classNames()}>
            <Button width="max" {...buttonProps}>
                {i18n(i18nKey, 'product') || ''}
            </Button>
        </div>
    );
};

ProductButton.propTypes = {
    i18nKey: PropTypes.string
};

export default ProductButton;
