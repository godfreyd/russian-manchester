import React from 'react';
import propTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import get from 'lodash/get';

import Input from '../../../common.components/input';

import i18n from '../../i18n';

import './filter__diagonal.css';

const classNames = cn('filter');

export default class FilterDiagonal extends React.Component {
    constructor(props) {
        super(props);

        this._placeholder = {
            min: get(props.filterPlaceholder, 'min') || '-∞',
            max: get(props.filterPlaceholder, 'max') || '∞'
        };

        this.state = {
            min: get(props.filterValueMin, '0.diagonalMin'),
            max: get(props.filterValueMax, '0.diagonalMax')
        };
    }

    /**
     * Отправляет событие изменение диагонали
     *
     * @param {Array} min
     * @param {Array} max
     * @returns {void}
     */
    _sendQuery(min = [], max = []) {
        const { filterChange } = this.props;

        filterChange('diagonalMin', min);
        filterChange('diagonalMax', max);
    }

    /**
     * Обработчик изменений радиокнопок
     *
     * @param {Object} type
     * @param {Object} target
     * @returns {void}
     */
    _handleChange(type, { target }) {
        const newState = {
            ...this.state,
            [type]: target.value
        };

        this.setState(newState);
        this._sendQuery(
            newState.min && [{ diagonalMin: newState.min }],
            newState.max && [{ diagonalMax: newState.max }]
        );
    }

    render() {
        return (
            <div className={classNames('diagonal')}>

                <div className={classNames('title')}>{i18n('filter-diagonal-label')}</div>

                <div className={classNames('area', { type: 'diagonal' })}>
                    <div className={classNames('input')} data-mark={i18n('filter-diagonal-from')}>
                        <Input
                            name="diagonal-min"
                            theme="normal"
                            size="m"
                            pin="round-round"
                            hasClear
                            placeholder={this._placeholder.min}
                            maxLength="4"
                            onChange={this._handleChange.bind(this, 'min')}
                            text={this.state.min}
                        />

                    </div>
                    <div className={classNames('input')} data-mark={i18n('filter-diagonal-to')}>
                        <Input
                            name="diagonal-max"
                            theme="normal"
                            size="m"
                            pin="round-round"
                            hasClear
                            placeholder={this._placeholder.max}
                            maxLength="4"
                            onChange={this._handleChange.bind(this, 'max')}
                            text={this.state.max}
                        />
                    </div>
                </div>

            </div>
        );
    }

    static propTypes = {
        filterPlaceholder: propTypes.object.isRequired,
        filterValueMin: propTypes.oneOfType([propTypes.array, propTypes.string]),
        filterValueMax: propTypes.oneOfType([propTypes.array, propTypes.string]),
        filterChange: propTypes.func.isRequired
    }
}
