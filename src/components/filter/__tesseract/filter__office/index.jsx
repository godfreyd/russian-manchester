import React from 'react';
import propTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import find from 'lodash/find';

import Checkbox from '../../../../common.components/checkbox';

import CheckboxWithTooltip from '../../../../common.components/checkbox-with-tooltip';

import Icon from '../../../../common.components/icon';
import CubeCard from '../../../../components/cube/cube-card';

import i18n from '../../../i18n';

import './index.css';

const classNames = cn('filter');

export default class OfficeFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            all: this._isAllChecked(),
            cubeId: null
        };
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

        return Object
            .values(cubes)
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

    /**
     * Показывает модальное окно администрирования куба
     * @param {Object} event
     * @param {Number} cubeId
     * @returns {void}
     * @private
     */
    _openManageCubeModal = (event, cubeId) => {
        event.preventDefault();

        this.setState({
            cubeId
        });
    }

    /**
     * Cкрывает модальное окно администрирования куба
     * @returns {void}
     * @private
     */
    _closeManageCubeModal = () => {
        this.setState({
            cubeId: null
        });
    }

    render() {
        const { officeName = i18n('unknown-office'), cubes = [] } = this.props;
        const { all, cubeId } = this.state;

        return (
            <div className={classNames('office')}>

                <div className={classNames('title')}>{officeName}</div>
                {cubes.length > 1 &&
                    <Checkbox
                        name="all"
                        checked={all}
                        onChange={this._handleAllCubesChange}
                    >
                        {i18n('filter-all-cubes')}
                    </Checkbox>
                }
                {cubes.map(cube => {
                    const { isAdmin, responsible } = globalConfig.userPermissions;

                    const canEditCube = isAdmin || responsible.includes(cube.id);

                    return [
                        <CheckboxWithTooltip
                            key={cube.id}
                            name={cube.id}
                            label={[
                                cube.name,
                                canEditCube &&
                                <Icon
                                    key={cube.id}
                                    type="gear"
                                    onClick={event => this._openManageCubeModal(event, cube.id)}
                                />
                            ]}
                            checked={cube.isChecked}
                            onChange={this._handleCubeChange}
                        >
                            {cube.description}
                        </CheckboxWithTooltip>
                    ];
                })}
                {cubeId &&
                    <CubeCard
                        cube={cubes.find(cube => cube.id === cubeId)}
                        onClose={this._closeManageCubeModal}
                    />
                }
            </div>
        );
    }

    static propTypes = {
        officeName: propTypes.string,
        cubes: propTypes.array,
        onChange: propTypes.func.isRequired
    }
}
