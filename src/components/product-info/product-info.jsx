import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import 'lego-on-react/src/components/textarea/textarea.css';

import ProductForm from '../../common.components/product-form';
import Textarea from '../../common.components/textarea';

import ProductButton from '../product-button';
import ProductInfoRow from '../product-info-row';
import ProductStatus from '../product-status';
import ImmutableProductInfo from '../immutable-product-info';
import MutableProductInfo from '../mutable-product-info';

import i18n from '../i18n';

import './product-info.css';

const classNames = cn('product-form');

const ProductInfo = props => {
    const {
        productInfo = {},
        inputs = {},
        isEdit,
        models,
        onCancelChanges,
        onProductNameChange,
        onInputChange,
        onModelSelect,
        onSaveChanges
    } = props;

    const { note = i18n('notes-empty', 'product') } = productInfo;

    return (
        <ProductForm onSubmit={onSaveChanges}>
            <div className={classNames()}>
                <div className={classNames('group')}>
                    <ProductStatus productInfo={productInfo} />
                </div>

                <div className={classNames('group')}>
                    <ImmutableProductInfo
                        productInfo={productInfo}
                        inputs={inputs}
                        isEdit={isEdit}
                        models={models}
                        onProductNameChange={onProductNameChange}
                        onInputChange={onInputChange}
                        onModelSelect={onModelSelect}
                    />
                </div>

                <div className={classNames('group')}>
                    <MutableProductInfo
                        productInfo={productInfo}
                        inputs={inputs}
                        isEdit={isEdit}
                        onInputChange={onInputChange}
                    />
                </div>

                <div className={classNames('group', { type: 'note' })}>
                    <ProductInfoRow infoKey={i18n('notes-title', 'product')}>
                        {isEdit ? (
                            <Textarea
                                size="m"
                                hasClear
                                cls={classNames('note')}
                                text={inputs.note || ''}
                                onChange={value => onInputChange('note', value)}
                            />
                        ) : (
                            <div className={classNames('note-text')}>{note}</div>
                        )}
                    </ProductInfoRow>
                </div>

                {isEdit && (
                    <div className={classNames('group', { type: 'buttons' })}>
                        <ProductButton
                            action
                            text={i18n('action-save')}
                            type="submit"
                        />
                        <ProductButton
                            text={i18n('action-cancel')}
                            onClick={onCancelChanges}
                        />
                    </div>
                )}
            </div>
        </ProductForm>
    );
};

ProductInfo.propTypes = {
    productInfo: PropTypes.object,
    inputs: PropTypes.object,
    isEdit: PropTypes.bool,
    models: PropTypes.array,
    onCancelChanges: PropTypes.func,
    onProductNameChange: PropTypes.func,
    onInputChange: PropTypes.func,
    onModelSelect: PropTypes.func,
    onSaveChanges: PropTypes.func
};

export default ProductInfo;
