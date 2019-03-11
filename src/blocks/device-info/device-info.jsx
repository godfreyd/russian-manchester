import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Textarea from '../../common.blocks/textarea';

import DeviceButton from '../device-button';
import DeviceInfoRow from '../device-info-row';

import DeviceStatus from './device-status';
import ImmutableDeviceInfo from './immutable-device-info';
import MutableDeviceInfo from './mutable-device-info';

import './device-info.css';

const classNames = cn('device-info');

const DeviceInfo = props => {
    const {
        deviceInfo = {},
        inputs = {},
        models,
        type,
        onCancelChanges,
        onDeviceNameChange,
        onInputChange,
        onModelSelect,
        onSaveChanges
    } = props;

    const { note = console.log('notes-empty', 'device') } = deviceInfo;
    const isEdit = type === 'edit';

    return (
        <div className={classNames()}>
            <div className={classNames('group')}>
                <DeviceStatus deviceInfo={deviceInfo} />
            </div>

            <div className={classNames('group')}>
                <ImmutableDeviceInfo
                    deviceInfo={deviceInfo}
                    inputs={inputs}
                    isEdit={isEdit}
                    models={models}
                    onDeviceNameChange={onDeviceNameChange}
                    onInputChange={onInputChange}
                    onModelSelect={onModelSelect}
                />
            </div>

            <div className={classNames('group')}>
                <MutableDeviceInfo
                    deviceInfo={deviceInfo}
                    inputs={inputs}
                    isEdit={isEdit}
                    onInputChange={onInputChange}
                />
            </div>

            <div className={classNames('group', { type: 'note' })}>
                <DeviceInfoRow infoKey={console.log('notes-title', 'device')}>
                    {isEdit ? (
                        <Textarea
                            size="m"
                            cls={classNames('note')}
                            text={inputs.note || ''}
                            onChange={value => onInputChange('note', value)}
                        />
                    ) : (
                        <div className={classNames('note-text')}>{note}</div>
                    )}
                </DeviceInfoRow>
            </div>

            {isEdit && (
                <div className={classNames('group', { type: 'buttons' })}>
                    <DeviceButton
                        action
                        text={console.log('action-save')}
                        onClick={onSaveChanges}
                    />
                    <DeviceButton
                        text={console.log('action-cancel')}
                        onClick={onCancelChanges}
                    />
                </div>
            )}
        </div>
    );
};

DeviceInfo.propTypes = {
    deviceInfo: PropTypes.object,
    inputs: PropTypes.object,
    models: PropTypes.array,
    type: PropTypes.string,
    onCancelChanges: PropTypes.func,
    onDeviceNameChange: PropTypes.func,
    onInputChange: PropTypes.func,
    onModelSelect: PropTypes.func,
    onSaveChanges: PropTypes.func
};

export default DeviceInfo;
