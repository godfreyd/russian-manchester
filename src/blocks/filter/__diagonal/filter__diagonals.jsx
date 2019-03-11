import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import get from 'lodash/get';

import LegoInput from 'lego-on-react/src/components/textinput/textinput.react';

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

                <div className={classNames('title')}>Диагональ экрана</div>

                <div className={classNames('area', { type: 'diagonal' })}>
                    <div className={classNames('input')} data-mark='от'>
                        <LegoInput
                            name="diagonal-min"
                            pin="round-round"
                            placeholder={this._placeholder.min}
                            maxLength="4"
                            onChange={this._handleChange.bind(this, 'min')}
                            text={this.state.min}
                        />
                    </div>
                    <div className={classNames('input')} data-mark='до'>
                        <LegoInput
                            name="diagonal-max"
                            pin="round-round"
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

    static get propTypes() {
        return {
            filterPlaceholder: PropTypes.object.isRequired,
            filterValueMin: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
            filterValueMax: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
            filterChange: PropTypes.func.isRequired
        };
    }
}
