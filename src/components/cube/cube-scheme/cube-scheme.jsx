import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import get from 'lodash/get';
import groupBy from 'lodash/groupBy';

import { parseSlot } from '../../../lib/helpers';

import Slot from '../slot';

import './cube-scheme.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('cube-scheme');

export default class CubeScheme extends React.Component {
    render() {
        const { cubeId, selectedSlots, isEditing } = this.props;
        const scheme = this._buildScheme();

        return (
            <div className={classNames()}>
                <div className={classNames('content')}>
                    {scheme.map(({ row, slots }) => (
                        <div key={row} className={classNames('row')}>
                            <div className={classNames('row-header')}>
                                <div className={classNames('row-name')}>
                                    {row}
                                </div>
                                <div className={classNames('row-slots-number')}>
                                    <span className={classNames('row-occupied-number')}>
                                        {this._getOccupiedNumber(slots)}
                                    </span>
                                    /
                                    <span className={classNames('row-total-number')}>{slots.length}</span>
                                </div>
                            </div>
                            <div className={classNames('row-slots')}>
                                <div className={classNames('row-slots-content')}>
                                    {slots.map(slot => (
                                        <Slot
                                            key={slot.id}
                                            cubeId={cubeId}
                                            slot={slot}
                                            isSelected={Boolean(selectedSlots[slot.id])}
                                            isEditing={isEditing}
                                            onClick={this._toggleSelection(slot)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    _buildScheme() {
        const { slots, lastEvents } = this.props;

        const parsed = slots.map(slot => {
            const currentEvent = lastEvents.find(event => event.slot === slot.name);
            const state = get(currentEvent, 'location', 'empty');

            return {
                ...slot,
                ...parseSlot(slot.name),
                state
            };
        });

        const grouped = groupBy(parsed, ({ row }) => row);

        return Object.entries(grouped)
            .map(([row, rowSlots]) => ({
                row,
                slots: rowSlots.sort((first, second) => Number(first.cell) - Number(second.cell))
            }))
            .sort((first, second) => first.row.localeCompare(second.row));

    }

    _getOccupiedNumber(slots) {
        const freeSlotLocations = [...globalConfig.locations.unavailable, 'empty'];

        return slots.filter(slot => !freeSlotLocations.includes(slot.state)).length;
    }

    _toggleSelection = slot => () => {
        const { selectedSlots, isEditing, onSelectedSlotsChange } = this.props;

        const wasSelected = Boolean(selectedSlots[slot.id]);
        const newSelectedSlots = isEditing ? { ...selectedSlots } : {};

        if (wasSelected) {
            delete newSelectedSlots[slot.id];
        } else {
            newSelectedSlots[slot.id] = slot;
        }

        onSelectedSlotsChange(newSelectedSlots);
    }

    static propTypes = {
        cubeId: propTypes.string.isRequired,
        slots: propTypes.array.isRequired,
        selectedSlots: propTypes.object.isRequired,
        lastEvents: propTypes.array.isRequired,
        isEditing: propTypes.bool.isRequired,
        onSelectedSlotsChange: propTypes.func.isRequired
    }
}
