import React from 'react';
import ReactDOM from 'react-dom';
import { withNaming } from '@bem-react/classname';
import flatten from 'lodash/flatten';

import Cube from '../cube';
import ProductsEmpty from '../products-empty';
import CubeStub from '../stubs/cube-stub';

import i18n from '../i18n';

import './products.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('products');

export default class Products extends React.Component {
    componentWillReceiveProps(nextProps) {
        const { filtersValue, updateProductList, products } = this.props;

        if (filtersValue !== nextProps.filtersValue) {
            updateProductList(flatten(Object.values(nextProps.filtersValue)));
        }

        if (products !== nextProps.products) {
            this.removeDarkening();
        }

        if (this.props.productActionInprogress &&
            this.props.productActionInprogress !== nextProps.productActionInprogress) {
            // Если конец действия с девайсом - перезапрашиваем список
            updateProductList(flatten(Object.values(nextProps.filtersValue)));
        }
    }

    /**
     * Удаляет затемнение девайсов после того, как поиск окончен
     *
     * @returns {void}
     * @private
     */
    removeDarkening() {
        // eslint-disable-next-line react/no-find-dom-node
        const component = ReactDOM.findDOMNode(this);
        const [places] = component.children;

        places.classList.remove('darkening');
    }

    /**
     * Возвращает массив кубов
     *
     * @param {Array} tesseracts
     * @returns {Array}
     * @private
     */
    _renderPlace(tesseracts) {
        const result = tesseracts.map(tesseract => {
            const { id, name, products } = tesseract;

            if (!products.length) {
                return null;
            }

            return (
                <Cube
                    key={id}
                    title={name}
                    openCard={this.props.openCard}
                    products={products}
                />
            );
        });

        return result.length ? result : <ProductsEmpty />;
    }

    /**
     * Создает из массива девайсов массив тессерактов, в которых сгруппированы устройства
     *
     * @param {Array} products
     * @returns {Array}
     * @private
     */
    _buildTesseracts(products) {
        const tesseracts = [];

        products.forEach(product => {
            if (!product.tesseract) {
                product.tesseract = {};
            }

            const { id, name } = product.tesseract;

            product.tesseract.id = id || 'unknown-tesseract';
            product.tesseract.name = name || i18n('unknown-tesseract');

            let tesseract = tesseracts.find(item => item.id === id);

            if (!tesseract) {
                tesseract = {
                    id,
                    name,
                    products: []
                };

                tesseracts.push(tesseract);
            }

            tesseract.products.push(product);
        });

        return tesseracts;
    }

    render() {
        const { products } = this.props;

        return (
            <div className={classNames()}>

                <div className={classNames('container')}>
                    {products ?
                        this._renderPlace(this._buildTesseracts(products)) :
                        <CubeStub />
                    }
                </div>

            </div>
        );
    }
}
