import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Button from '../product-button';

import './product-buttons.css';

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
