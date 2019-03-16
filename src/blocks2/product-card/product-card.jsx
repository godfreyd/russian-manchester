import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import ProductInfo from '../product-info';

const classNames = cn('product-card');

class ProductCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            productInfo: {}
        };

        this._onSaveInfo = this._onSaveInfo.bind(this);
    }

    componentWillMount() {
        this._initializeInputs();
    }

     /**
     * Помещаем инициализирующее значение в инпут
     *
     * @private
     */
    _initializeInputs() {

        const productInfo = {
            id: '',
            brand: '',
            note: ''
        };

        this.setState({ productInfo });
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
        const { onInputChange } = this.props;
        const { productInfo } = this.state;

        if (onInputChange) {
            onInputChange(value.trim());
        }

        productInfo[name] = value;

        this.setState({ productInfo });

    }

    /**
     * Сохранение информации о продукте
     *
     * @returns {void}
     * @private
     */
    _onSaveInfo = () => {
        const { productInfo } = this.state;

        const body = {
            id: productInfo.id,
            brand: productInfo.brand,
            note: productInfo.note
        };

        console.log(this.props.saveProduct(body));

        this.props.saveProduct(body);
    }

    render() {
        const { productInfo } = this.state;

        return (
            <div className={classNames()}>
                <div className={classNames('content')}>
                    <ProductInfo
                        productInfo={productInfo}
                        onInputChange={this._handleInputChange}
                        onSaveInfo={this._onSaveInfo}
                     />
                </div>
            </div>
        );
    }

    static propTypes = {
        onInputChange: PropTypes.func,
        onSaveInfo: PropTypes.func
    }

}

export default ProductCard;
