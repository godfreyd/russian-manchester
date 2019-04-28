import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import CopyText from '../../common.components/copy-text';
import Input from '../../common.components/input';
import TicketLink from '../../common.components/ticket-link';

import ProductInfoRow from '../product-info-row';

import i18n from '../i18n';

import './mutable-product-info.css';

const classNames = cn('mutable-product-info');

/**
 * Получает значение для отображения часов
 * @param {Number} count
 * @returns {String}
 */
const buildHoursValue = count => {
    const value = i18n('hours', 'common', { count });

    return count > 0 ? `${count} ${value}` : '';
};

const MutableProductInfo = props => {
    const {
        productInfo = {},
        inputs = {},
        isEdit,
        onInputChange
    } = props;

    const {
        durationOfUse,
        id,
        imei,
        inventory,
        serial,
        source,
        ticket
    } = productInfo;

    return (
        <div className={classNames()}>
            <ProductInfoRow infoKey="Product ID">
                <CopyText name={id} />
            </ProductInfoRow>
            <ProductInfoRow infoKey={i18n('info-imei', 'product')}>
                {isEdit ? (
                    <Input
                        text={inputs.imei}
                        placeholder={i18n('info-imei', 'product')}
                        onChange={value => onInputChange('imei', value)}
                    />
                ) : imei}
            </ProductInfoRow>
            <ProductInfoRow infoKey={i18n('info-inventory', 'product')}>
                {isEdit ? (
                    <Input
                        text={inputs.inventory}
                        placeholder={i18n('info-inventory', 'product')}
                        onChange={value => onInputChange('inventory', value)}
                    />
                ) : inventory}
            </ProductInfoRow>
            <ProductInfoRow infoKey={i18n('info-serial', 'product')}>
                {isEdit ? (
                    <Input
                        text={inputs.serial}
                        placeholder={i18n('info-serial', 'product')}
                        onChange={value => onInputChange('serial', value)}
                    />
                ) : serial}
            </ProductInfoRow>
            <ProductInfoRow infoKey={i18n('info-duration', 'product')}>
                {isEdit ? (
                    <Input
                        text={inputs.durationOfUse}
                        placeholder={i18n('info-duration-product', 'product')}
                        onChange={value => onInputChange('durationOfUse', parseInt(value, 10) || 0)}
                    />
                ) : buildHoursValue(durationOfUse)}
            </ProductInfoRow>
            <ProductInfoRow infoKey={i18n('info-source', 'product')}>
                {isEdit ? (
                    <Input
                        text={inputs.source}
                        placeholder={i18n('info-source', 'product')}
                        onChange={value => onInputChange('source', value)}
                    />
                ) : source}
            </ProductInfoRow>
            <ProductInfoRow infoKey={i18n('info-ticket', 'product')}>
                {isEdit ? (
                    <Input
                        text={inputs.ticket}
                        placeholder={i18n('info-ticket', 'product')}
                        onChange={value => onInputChange('ticket', value)}
                    />
                ) : (
                    ticket && <TicketLink ticket={ticket} />
                )}
            </ProductInfoRow>
        </div>
    );
};

MutableProductInfo.propTypes = {
    productInfo: PropTypes.object,
    inputs: PropTypes.object,
    isEdit: PropTypes.bool,
    onInputChange: PropTypes.func
};

export default MutableProductInfo;
