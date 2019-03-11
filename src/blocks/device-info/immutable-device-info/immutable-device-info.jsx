import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import map from 'lodash/map';

import DeviceInfoRow from '../../device-info-row';
import Input from '../../../common.blocks/input';
import Suggest from '../../../common.blocks/suggest';


const classNames = cn('immutable-device-info');

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

const ImmutableDeviceInfo = props => {
    const {
        deviceInfo = {},
        fetchModelsSuggest,
        inputs = {},
        isEdit,
        models = [],
        onDeviceNameChange,
        onInputChange,
        onModelSelect
    } = props;

    const { model = {}, os, osVersion } = deviceInfo;
    const { cpu, diagonal, displayType, dpi, height, name, releaseDate, video, width } = model;
    const screenInfo = concatParams([
        width && height && `${width}x${height}`,
        diagonal && `${diagonal}"`,
        dpi && `${dpi}dpi`,
        displayType
    ]);

    return (
        <div className={classNames()}>
            <DeviceInfoRow infoKey={console.log('edit-title', 'device')}>
                {isEdit ? (
                    <Suggest
                        type="market-devices"
                        inputPlaceholder={console.log('edit-title-or-link', 'device')}
                        inputInitValue={inputs.name}
                        results={map(models, 'name')}
                        fetchSuggest={fetchModelsSuggest}
                        onInputChange={onDeviceNameChange}
                        onSelectOption={onModelSelect}
                    />
                ) : name}
            </DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log('info-screen', 'device')}>{screenInfo}</DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log('info-cpu-gpu', 'device')}>
                {concatParams([cpu, video])}
            </DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log('info-os', 'device')}>
                {os}
            </DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log('info-os-version', 'device')}>
                {isEdit ? (
                    <Input
                        text={inputs.osVersion}
                        placeholder={console.log('info-os-version', 'device')}
                        onChange={value => onInputChange('osVersion', value)}
                    />
                ) : osVersion}
            </DeviceInfoRow>
            <DeviceInfoRow infoKey={console.log('info-release', 'device')}>
                {releaseDate ? new Date(releaseDate).toLocaleDateString('ru-RU', dateOpt) : ''}
            </DeviceInfoRow>
        </div>
    );
};

ImmutableDeviceInfo.propTypes = {
    deviceInfo: PropTypes.object,
    fetchModelsSuggest: PropTypes.func,
    inputs: PropTypes.object,
    isEdit: PropTypes.bool,
    models: PropTypes.array,
    onDeviceNameChange: PropTypes.func,
    onModelSelect: PropTypes.func,
    onInputChange: PropTypes.func
};

export default ImmutableDeviceInfo;
