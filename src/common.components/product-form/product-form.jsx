import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import './product-form.css';

const classNames = cn('product-form');

class ProductForm extends React.Component {
    render() {
        return (
            <form className={classNames()} onSubmit={this._onSubmit}>
                {this.props.children}
            </form>
        );
    }

    _onSubmit = event => {
        event.preventDefault();

        this.props.onSubmit();
    }

    static propTypes = {
        children: PropTypes.node.isRequired,
        onSubmit: PropTypes.func.isRequired
    }
}

export default ProductForm;
