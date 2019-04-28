import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import map from 'lodash/map';

import ProductInfoRow from '../product-info-row';
import Input from '../../common.components/input';
import Suggest from '../../common.components/suggest';

import i18n from '../i18n';

const classNames = cn('immutable-product-info');

const dateOpt = { year: 'numeric', month: 'long', day: 'numeric' };

/**
 * Убирает null-строки и соединяет запятой
 *
 * @param {String []} params
 * @returns {String}
 */
const concatParams = params => params
    .filter(Boolean)
    .join(', ');

const ImmutableProductInfo = props => {
    const {
        productInfo = {},
        fetchModelsSuggest,
        inputs = {},
        isEdit,
        models = [],
        onProductNameChange,
        onInputChange,
        onModelSelect
    } = props;

    const { model = {}, os, osVersion } = productInfo;
    const { cpu, diagonal, displayType, dpi, height, name, releaseDate, video, width } = model;
    const screenInfo = concatParams([
        width && height && `${width}x${height}`,
        diagonal && `${diagonal}"`,
        dpi && `${dpi}dpi`,
        displayType
    ]);

    return (
        <div className={classNames()}>
            <ProductInfoRow infoKey={i18n('edit-title', 'product')}>
                {isEdit ? (
                    <Suggest
                        type="market-products"
                        inputPlaceholder={i18n('edit-title-or-link', 'product')}
                        inputInitValue={inputs.name}
                        results={map(models, 'name')}
                        fetchSuggest={fetchModelsSuggest}
                        onInputChange={onProductNameChange}
                        onSelectOption={onModelSelect}
                    />
                ) : name}
            </ProductInfoRow>
            <ProductInfoRow infoKey={i18n('info-screen', 'product')}>{screenInfo}</ProductInfoRow>
            <ProductInfoRow infoKey={i18n('info-cpu-gpu', 'product')}>
                {concatParams([cpu, video])}
            </ProductInfoRow>
            <ProductInfoRow infoKey={i18n('info-os', 'product')}>
                {os}
            </ProductInfoRow>
            <ProductInfoRow infoKey={i18n('info-os-version', 'product')}>
                {isEdit ? (
                    <Input
                        text={inputs.osVersion}
                        placeholder={i18n('info-os-version', 'product')}
                        onChange={value => onInputChange('osVersion', value)}
                    />
                ) : osVersion}
            </ProductInfoRow>
            <ProductInfoRow infoKey={i18n('info-release', 'product')}>
                {releaseDate ? new Date(releaseDate).toLocaleDateString('ru-RU', dateOpt) : ''}
            </ProductInfoRow>
        </div>
    );
};

ImmutableProductInfo.propTypes = {
    productInfo: PropTypes.object,
    fetchModelsSuggest: PropTypes.func,
    inputs: PropTypes.object,
    isEdit: PropTypes.bool,
    models: PropTypes.array,
    onProductNameChange: PropTypes.func,
    onModelSelect: PropTypes.func,
    onInputChange: PropTypes.func
};

export default ImmutableProductInfo;
