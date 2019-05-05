import { withNaming } from '@bem-react/classname';
import React from 'react';
import PropTypes from 'prop-types';

import ProductForm from '../../common.components/product-form';
import Select from '../../common.components/select';
import Textarea from '../../common.components/textarea';

import ProductButton from '../product-button';
import ProductInfoRow from '../product-info-row';
import ProductStatus from '../product-status';

import i18n from '../i18n';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('product-form');

/**
 * Опции для селекта причины перевода устройства в сервис
 * @type {{val: String, text: String}[]}
 */
const serviceReasons = [
    'research',
    'repair',
    'unsuitable-for-cube',
    'disappeared'
]
    .map(reason => ({
        val: reason,
        text: i18n(`reason-${reason}`, 'product')
    }));

class ProductServiceForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reason: '',
            comment: ''
        };
    }

    render() {
        const { productInfo, onCancel } = this.props;
        const { reason, comment } = this.state;

        return (
            <ProductForm onSubmit={this._onSubmit}>
                <div className={classNames('group')}>
                    <ProductStatus productInfo={productInfo} location="prepare-service" />
                </div>

                <div className={classNames('group')}>
                    <ProductInfoRow infoKey={i18n('reason', 'product')}>
                        <Select
                            size="m"
                            type="radio"
                            text="vary"
                            width="max"
                            val={reason}
                            items={serviceReasons}
                            onChange={this._onReasonChange}
                        />
                    </ProductInfoRow>
                    <ProductInfoRow infoKey={i18n('description')}>
                        <Textarea
                            size="m"
                            text={comment}
                            onChange={this._onCommentChange}
                        />
                    </ProductInfoRow>
                </div>
                <div className={classNames('group', { type: 'buttons' })}>
                    <ProductButton
                        action
                        disabled={!reason}
                        text={i18n('action-to-service', 'product')}
                        type="submit"
                    />
                    <ProductButton
                        text={i18n('action-cancel')}
                        onClick={onCancel}
                    />
                </div>
            </ProductForm>
        );
    }

    _onReasonChange = ([reason]) => {
        this.setState({ reason });
    }

    _onCommentChange = comment => {
        this.setState({ comment });
    }

    _onSubmit = () => {
        const { reason, comment } = this.state;
        const { onSubmit } = this.props;

        onSubmit({ reason, comment });
    }

    static propTypes = {
        productInfo: PropTypes.object.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onCancel: PropTypes.func
    }
}

export default ProductServiceForm;
