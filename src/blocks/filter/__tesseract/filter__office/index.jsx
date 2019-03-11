import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import find from 'lodash/find';

import CheckboxWithTooltip from '../../../../common.blocks/checkbox-with-tooltip';
import LegoCheckbox from 'lego-on-react/src/components/checkbox/checkbox.react';

const classNames = cn('filter');

export default class OfficeFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { all: this._isAllChecked() };
    }

    /**
     * Выделить заданные кубы в состояние status
     *
     * @param {Boolean} value
     * @private
     */
    _makeAllCubesChecked(value) {
        const { cubes } = this.props;

        cubes.forEach(cube => {
            cube.isChecked = value;
        });
    }

    /**
     * Обработчик изменений чекбокса "Все кубы"
     *
     * @param {Object} target
     * @returns {void}
     * @private
     */
    _handleAllCubesChange = ({ target }) => {
        const { onChange } = this.props;

        this._makeAllCubesChecked(target.checked);
        this.setState({ all: target.checked }, onChange);
    }

    /**
     * Проверка должен ли чекбокс "Все кубы" нажат
     *
     * @returns {Boolean}
     * @private
     */
    _isAllChecked() {
        const { cubes } = this.props;

        return Object.values(cubes)
            .every(cube => cube.isChecked);
    }

    /**
     * Обработчик изменений фильтра по местоположению
     *
     * @param {Object} target
     * @returns {void}
     * @private
     */
    _handleCubeChange = ({ target }) => {
        const { cubes, onChange } = this.props;
        const cube = find(cubes, { id: target.name });

        cube.isChecked = target.checked;

        this.setState({ all: this._isAllChecked() }, onChange);
    }

    render() {
        const { officeName = 'unknown-office', cubes = [] } = this.props;
        const { all } = this.state;

        return (
            <div className={classNames('office')}>

                <div className={classNames('title')}>{officeName}</div>
                {cubes.length > 1 &&
                    <LegoCheckbox
                        name="all"
                        checked={all}
                        onChange={this._handleAllCubesChange}
                    >
                        Все кубы
                    </LegoCheckbox>
                }
                {cubes.map(cube => (
                    <CheckboxWithTooltip
                        key={cube.id}
                        name={cube.id}
                        text={cube.name}
                        checked={cube.isChecked}
                        onChange={this._handleCubeChange}
                    >
                        {cube.description}
                    </CheckboxWithTooltip>
                ))}

            </div>
        );
    }

    static get propTypes() {
        return {
            officeName: PropTypes.string,
            cubes: PropTypes.array,
            onChange: PropTypes.func.isRequired
        };
    }
}
