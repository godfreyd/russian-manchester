import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Input from '../../common.blocks/input';
import Button from '../../common.blocks/button';

const classNames = cn('product-card');

class ProductCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            productInfo: {}
        };

    }

    /**
     * Обработчик ввода в поля формы
     *
     * @param {String} name
     * @param {String} value
     * @returns {void}
     * @private
     */
    _handleInputChange = (name, value) => {
        const { onInputChange} = this.props;
        const { productInfo } = this.state;

        if (onInputChange) {
            onInputChange(value.trim());
        }

        // this.setState({
        //     [name]: value
        // });

        productInfo[name] = value;

        this.setState({ productInfo });


        // this.setState({ productInfo: { ...productInfo, [name]: value } });
    }

    /**
     * Сохранение информации о продукте
     *
     * @returns {void}
     * @private
     */
    _onSubmit = event => {
        event.preventDefault();

        const { productInfo } = this.state;

        const body = {
            id: productInfo.id,
            brand: productInfo.brand,
        };

        this.props.saveProduct(body);

    }

    render() {
        const { productInfo } = this.state;

        return (
            <div className={classNames()}>
                <div className={classNames('content')}>
                <form className={classNames('form')} onSubmit={this._onSubmit}>
                    <label>
                        ID:

                        <Input
                        theme="normal"
                        name="id"
                        text={productInfo.id || ''}
                        autocomplete={false}
                        size="m"
                        hasClear
                        placeholder='ID'
                        pin="round-round"
                        onChange={value => this._handleInputChange('id', value)}
                    />
                    </label>

                    <label>
                    BRAND:

                    <Input
                    theme="normal"
                    name="id"
                    text={productInfo.brand || ''}
                    autocomplete={false}
                    size="m"
                    hasClear
                    placeholder='Бренд'
                    pin="round-round"
                    onChange={value => this._handleInputChange('brand', value)}
                />
                </label>


                    <Button theme="normal" size="m" action type="submit" >
                    Сохранить
                    </Button>
                </form>

                </div>
            </div>
        );
    }

    static propTypes = {
        onInputChange: PropTypes.func
    }

}

export default ProductCard;
