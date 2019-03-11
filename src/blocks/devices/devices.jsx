/* eslint-disable no-prototype-builtins */
import React from 'react';
import ReactDOM from 'react-dom';
import { cn } from '@bem-react/classname';
import flatten from 'lodash/flatten';

import Cube from '../cube';
import DevicesEmpty from '../devices-empty';
import CubeStub from '../stubs/cube-stub';

import './devices.css';

const classNames = cn('devices');

export default class Devices extends React.Component {
    componentWillReceiveProps(nextProps) {
        const { filtersValue, updateDeviceList, devices } = this.props;

        if (filtersValue !== nextProps.filtersValue) {
            updateDeviceList(flatten(Object.values(nextProps.filtersValue)));
        }

        if (devices !== nextProps.devices) {
            this.removeDarkening();
        }

        if (this.props.deviceActionInprogress &&
            this.props.deviceActionInprogress !== nextProps.deviceActionInprogress) {
            // Если конец действия с девайсом - перезапрашиваем список
            updateDeviceList(flatten(Object.values(nextProps.filtersValue)));
        }
    }

    /**
     * Удаляет затемнение девайсов после того, как поиск окончен
     *
     * @returns {void}
     * @private
     */
    removeDarkening() {
        // eslint-disable-next-line react/no-find-dom-node
        const component = ReactDOM.findDOMNode(this);
        const [places] = component.children;

        places.classList.remove('darkening');
    }

    /**
     * Возвращает массив кубов
     *
     * @param {Array} tesseracts
     * @returns {Array}
     * @private
     */
    _renderPlace(tesseracts) {
        const result = tesseracts.map(tesseract => {
            const { id, name, devices } = tesseract;

            if (!devices.length) {
                return null;
            }

            return (
                <Cube
                    key={id}
                    title={name}
                    openCard={this.props.openCard}
                    devices={devices}
                />
            );
        });

        return result.length ? (result) : <DevicesEmpty />;
    }

    /**
     * Создает из массива девайсов массив тессерактов, в которых сгруппированы устройства
     *
     * @param {Array} devices
     * @returns {Array}
     * @private
     */
    _buildTesseracts(devices) {
        const tesseracts = [];

        devices.forEach(device => {
            if (!device.tesseract) {
                device.tesseract = {};
            }

            const { id, name } = device.tesseract;

            device.tesseract.id = id || 'unknown-tesseract';
            device.tesseract.name = name || 'unknown-tesseract';

            let tesseract = tesseracts.find(item => item.id === id);

            if (!tesseract) {
                tesseract = {
                    id,
                    name,
                    devices: []
                };

                tesseracts.push(tesseract);
            }

            tesseract.devices.push(device);
        });

        return tesseracts;
    }

    render() {
        const { devices } = this.props;

        return (
            <div className={classNames()}>

                <div className={classNames('container')}>
                    {devices ?
                        this._renderPlace(this._buildTesseracts(devices)) :
                        <CubeStub />
                    }
                </div>

            </div>
        );
    }
}
