import React from 'react';
import { withNaming } from '@bem-react/classname';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';

import { reachUnlockGoal } from '../../../lib/metrika';

import Badge from '../../../common.components/badge';
import ExpiredBadge from '../../../common.components/badge/expired-badge';
import Link from '../../../common.components/link';

import i18n from '../../i18n';

import './user-products__product.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('user-products');

class Product extends React.PureComponent {

    /**
     * Обработчик нажатия на девайс в колонке устройств
     *
     * @returns {void}
     * @private
     */
    _showProductCardModal = () => {
        const { product, history, location } = this.props;

        history.replace({
            ...location,
            hash: `#${product.id}`
        });
    }

    /**
     * Снимает бронь устройства при нажатии на кноку "Удалить"
     *
     * @returns {void}
     * @private
     */
    _unlockProduct = () => {
        const { product: { id, model }, unlockProduct } = this.props;

        reachUnlockGoal(id, model);
        unlockProduct(id);
    }

    /**
     * Возвращает нужный бейджик устройства
     *
     * @returns {ReactElement}
     * @private
     */
    _getBadge = () => {
        const { product } = this.props;
        const dateDifference = new Date(product.expired) - new Date();
        let type = product.location;

        if (type === 'reserved') {
            const minutes = Math.floor(dateDifference / (60 * 1000));

            return <Badge type="my-reserved" text={i18n('status-reserve-till', 'product', { minutes })} />;
        }

        if (type === 'expired') {
            return <ExpiredBadge dateDifference={-dateDifference} />;
        }

        if (dateDifference <= 0) {
            type = 'need-return';
        }

        return <Badge type={type} text={i18n(`status-${type}`, 'product')} />;
    }

    render() {
        const { product } = this.props;
        const tesseract = get(product, 'tesseract.name') || i18n('undefined');
        const productModel = get(product, 'model') || i18n('noname', 'product');

        return (
            <div className={classNames('product')}>

                <div className={classNames('product-status')}>
                    {this._getBadge()}

                    {product.location === 'reserved' &&
                        <Link onClick={this._unlockProduct}>
                            {i18n('my-products-delete')}
                        </Link>
                    }
                </div>

                <div className={classNames('product-description')} onClick={this._showProductCardModal}>
                    <div className={classNames('product-title')} title={productModel}>
                        {productModel}
                    </div>
                    <div className={classNames('product-info')}>
                        {tesseract} {product.slot && ` → ${product.slot}`}
                    </div>
                </div>
            </div>
        );
    }

    static propTypes = {
        product: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        unlockProduct: PropTypes.func.isRequired
    }
}

export default withRouter(Product);
