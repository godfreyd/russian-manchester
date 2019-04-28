import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import { parseTicket } from '../../lib/helpers';

import ProductForm from '../../common.components/product-form';
import ErrorTooltip from '../../common.components/error-tooltip';
import TextInput from '../../common.components/input';

import ProductButton from '../product-button';
import ProductInfoRow from '../product-info-row';
import ProductStatus from '../product-status';

import i18n from '../i18n';

const classNames = cn('product-form');

class ProductDestroyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ticket: '',
            isErrorVisible: true
        };
    }

    render() {
        const { productInfo, onCancel } = this.props;
        const { ticket, isErrorVisible } = this.state;

        return (
            <ProductForm onSubmit={this._onSubmit}>
                <div className={classNames('group')}>
                    <ProductStatus productInfo={productInfo} location="prepare-destroy" />
                </div>
                <div className={classNames('group')}>
                    <ProductInfoRow infoKey={i18n('ticket', 'product')}>
                        <div className={classNames('input')} ref={this._createInputRef}>
                            <TextInput
                                text={ticket}
                                onChange={this._onTicketChange}
                            />
                        </div>
                        <ErrorTooltip
                            anchor={this._input}
                            visible={isErrorVisible}
                            autoclosable
                            onOutsideClick={this._onTooltipClose}
                            to="bottom"
                        >
                            {i18n('validation-ticket', 'error')}
                        </ErrorTooltip>
                    </ProductInfoRow>
                </div>
                <div className={classNames('group', { type: 'buttons' })}>
                    <ProductButton
                        action
                        disabled={!ticket}
                        text={i18n('destroy', 'product')}
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

    _createInputRef = input => {
        this._input = input;
    }

    _onTooltipClose = () => {
        this.setState({
            isErrorVisible: false
        });
    }

    _onTicketChange = ticket => {
        this.setState({
            ticket,
            isErrorVisible: false
        });
    }

    _onSubmit = () => {
        const { onSubmit } = this.props;
        const { ticket: inputTicket } = this.state;

        const ticket = parseTicket(inputTicket);

        this.setState({
            isErrorVisible: !ticket
        });

        if (ticket) {
            onSubmit(ticket);
        }
    }

    static propTypes = {
        productInfo: PropTypes.object.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onCancel: PropTypes.func
    }
}

export default ProductDestroyForm;
