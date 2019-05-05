import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import Button from '../product-button';

import './product-buttons.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('product-buttons');

const ProductButtons = props => {
    const { action, items = [] } = props;

    return (
        <div className={classNames()}>
            {items.map(button => button.isVisible ? (
                <div className={classNames('item')} key={button.i18nKey}>
                    <Button
                        action={action}
                        disabled={button.isDisabled()}
                        {...button}
                    />
                </div>
            ) : null)}
        </div>
    );
};

ProductButtons.propTypes = {
    action: PropTypes.bool,
    items: PropTypes.array
};

export default ProductButtons;
