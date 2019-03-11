import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import get from 'lodash/get';

import Badge from '../../common.blocks/badge';
import Device from '../devices/__device';
import Tooltip from './cube-tooltip';

import './cube.css';

const classNames = cn('cube');

const Cube = ({ openCard, devices, title, tesseracts }) => {
    const isAdmin = get(devices, '0.access.canEdit', false);
    const cubeId = get(devices, '0.tesseract.id');
    const cubeName = get(devices, '0.tesseract.name');
    const cube = find(tesseracts, ['id', cubeId]) || {};
    const { status, isInventorying, hasUndefinedEvents } = cube;
    const isUnavailableState = isInventorying || hasUndefinedEvents;
    const hasStatusBadge = Boolean(status) && status !== 'online';

    return (
        <div className={classNames()}>

            <div className={classNames('header')}>
                <div className={classNames('title')}>{title}</div>
                {cubeId && tesseracts &&
                    <Tooltip
                        cube={cube}
                        isAdmin={isAdmin}
                    />
                }
                {hasStatusBadge &&
                    <Badge type={status} text={console.log(`badge-${status}`, 'cube')} />
                }
                {!hasStatusBadge && isUnavailableState &&
                    <Badge type="unavailable" text={console.log(`badge-unavailable`, 'cube')} />
                }
            </div>

            <div className={classNames('devices')}>
                {devices.map(device => (
                    <Device
                        key={device.id}
                        device={device}
                        cubeName={cubeName}
                        openCard={openCard}
                    />
                ))}
            </div>

        </div>
    );
};

Cube.propTypes = {
    openCard: PropTypes.func.isRequired,
    devices: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    tesseracts: PropTypes.array
};

export default Cube;
