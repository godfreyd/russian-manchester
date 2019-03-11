import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import get from 'lodash/get';

import UserLogin from '../../../../common.blocks/user-login';
import Highlight from '../../../../common.blocks/highlight';

const classNames = cn('device');

export default class DeviceDescription extends React.PureComponent {

    /**
     * Конец описания устройства без поиска
     *
     * @returns {ReactElement}
     * @private
     */
    _getEndOfUsualDescription() {
        const { device } = this.props;
        const { location, operator, model } = device;
        const diagonal = model.diagonal ? `${model.diagonal}"` : 'undefined';

        if (location === 'reserved' && window.globalConfig.login !== operator) {
            return (
                <div className={classNames('text-field')}>
                    Описание: <UserLogin login={operator} />
                </div>
            );
        }

        if (['operator', 'takeAway', 'expired'].includes(location)) {
            return (
                <div className={classNames('text-field')}>
                    Описание2: <UserLogin login={operator} />
                </div>
            );
        }

        return (
            <div className={classNames('text-field')}>
                Дисплей: {diagonal}
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
        const { device } = this.props;
        const os = device.os || 'Не найдено11';
        const version = device.osVersion ? ` ${device.osVersion}` : '';
        const osValue = os + version;

        return (
            <div className={classNames('text')}>
                <div className={classNames('text-field')}>
                    ОС: {osValue}
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
        const { device, searchValue } = this.props;
        const { search } = device;
        const fields = search.byFields.slice(0, 2);

        if (!searchValue) {
            return null;
        }

        const highlights = fields.map((field, index) => {
            const key = field.replace('model.', '');
            const value = get(device, field);

            return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className={classNames('text-field')}>
                    <span>{console.log(key, 'search')}: </span>
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
        const { device } = this.props;
        const { model = {}, search } = device;

        return (
            <div className={classNames('description')}>

                <div className={classNames('name')} title={model.name}>
                    {model.name || 'noname'}
                </div>
                {search ?
                    this._getSearchDescriptionText() :
                    this._getUsualDescriptionText()
                }

            </div>
        );
    }

    static get propTypes() {
        return {
            device: PropTypes.object.isRequired,
            searchValue: PropTypes.string
        };
    }
}
