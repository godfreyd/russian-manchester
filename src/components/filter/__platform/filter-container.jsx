import React from 'react';
import propTypes from 'prop-types';
import mapKeys from 'lodash/mapKeys';
import mapValues from 'lodash/mapValues';
import set from 'lodash/set';

import PlatformFilter from './filter__platform';

import './filter__platform.css';

export default class PlatformFilterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.platforms = props.platforms;

        this._findAndReplaceNulls(this.platforms);
        this._defaultState();
    }

    /**
     * Меняет null поля в фильтре на ''
     *
     * @param {Object} obj
     * @returns {void}
     * @private
     */
    _findAndReplaceNulls = obj => {
        if (typeof obj.null !== 'undefined') {
            obj[''] = obj.null;
            delete obj.null;
        }

        mapValues(obj, value => {
            if (typeof value === 'object' && value !== null) {
                this._findAndReplaceNulls(value);
            }
        });
    }

    /**
     * Устанавливает state по-умолчанию
     * Превращает массив вида [{platforms: 'iOS_10'}] в state вида
     * {
     *  iOS: {
     *    all: true,
     *    10: true
     *  }
     * }
     *
     * @returns {void}
     * @private
     */
    _defaultState() {
        this.state = {};

        this.props.platformsValue.forEach(value => {
            const [platform, version] = value.platforms.split('_');

            if (version) {
                set(this.state, [platform, version], true);
            }
            // Выставляем головному чекбоксу checked
            set(this.state, [platform, 'all'], true);
        });
    }

    /**
     * Получает query параметры для запроса
     *
     * @returns {Array}
     * @private
     */
    _getQuery() {
        const result = [];

        mapKeys(this.state, (versions, platform) => {
            if (!versions.all) {
                return;
            }

            for (const version in versions) {
                if (versions[version] && version !== 'all') {
                    result.push({
                        platforms: `${platform}_${version}`
                    });
                }
            }

            if (result.length === 0) {
                result.push({ platforms: platform });
            }
        });

        return result;
    }

    /**
     * Обработчик нажатия на чекбокс с версиями платформы
     *
     * @param {Object} target
     * @returns {void}
     */
    _handleChange = ({ target }) => {
        const [platform, version] = target.name.split('_');

        set(this.state, [platform, version], target.checked);

        this.setState(this.state);

        this.props.filterChange('platforms', this._getQuery());
    }

    render() {
        return (
            <PlatformFilter
                names={Object.keys(this.platforms)}
                status={this.state}
                platforms={this.platforms}
                onChange={this._handleChange}
            />
        );
    }

    static propTypes = {
        platforms: propTypes.object.isRequired,
        platformsValue: propTypes.array,
        filterChange: propTypes.func.isRequired
    }
}
