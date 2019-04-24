import React from 'react';
import propTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import get from 'lodash/get';

import Highlight from '../../../../common.components/highlight';
import UserLogin from '../../../../common.components/user-login';

import i18n from '../../../i18n';

const classNames = cn('product');

export default class ProductDescription extends React.PureComponent {

    /**
     * Конец описания устройства без поиска
     *
     * @returns {ReactElement}
     * @private
     */
    _getEndOfUsualDescription() {
        const { product } = this.props;
        const { location, operator, model } = product;
        const diagonal = model.diagonal ? `${model.diagonal}"` : i18n('undefined');

        if (location === 'reserved' && globalConfig.login !== operator) {
            return (
                <div className={classNames('text-field')}>
                    {i18n('operator-reserved', 'product')}: <UserLogin login={operator} />
                </div>
            );
        }

        if (globalConfig.locations.operator.includes(location)) {
            return (
                <div className={classNames('text-field')}>
                    {i18n('operator-on-hand', 'product')}: <UserLogin login={operator} />
                </div>
            );
        }

        return (
            <div className={classNames('text-field')}>
                {i18n('info-screen', 'product')}: {diagonal}
            </div>
        );
    }

    /**
     * Описание устройства без поиска
     *
     * @returns {ReactElement}
     * @private
     */
    _getUsualDescriptionText() {
        const { product } = this.props;
        const os = product.os || i18n('undefined');
        const version = product.osVersion ? ` ${product.osVersion}` : '';
        const osValue = os + version;

        return (
            <div className={classNames('text')}>
                <div className={classNames('text-field')}>
                    {i18n('info-os', 'product')}: {osValue}
                </div>
                {this._getEndOfUsualDescription()}
            </div>
        );
    }

    /**
     * Описание устройства при поиске
     *
     * @returns {ReactElement}
     * @private
     */
    _getSearchDescriptionText() {
        const { product, searchValue } = this.props;
        const { search } = product;
        const fields = search.byFields.slice(0, 2);

        if (!searchValue) {
            return null;
        }

        const highlights = fields.map((field, index) => {
            const key = field.replace('model.', '');
            const value = get(product, field);

            return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className={classNames('text-field')}>
                    <span>{i18n(key, 'search')}: </span>
                    <Highlight text={searchValue} word={value} />
                </div>
            );
        });

        return (
            <div className={classNames('text')}>
                {highlights}
            </div>
        );
    }

    render() {
        const { product } = this.props;
        const { model = {}, search } = product;

        return (
            <div className={classNames('description')}>

                <div className={classNames('name')} title={model.name}>
                    {model.name || i18n('noname', 'product')}
                </div>
                {search ?
                    this._getSearchDescriptionText() :
                    this._getUsualDescriptionText()
                }

            </div>
        );
    }

    static propTypes = {
        product: propTypes.object.isRequired,
        searchValue: propTypes.string
    }
}
