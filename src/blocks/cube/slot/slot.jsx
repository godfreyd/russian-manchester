import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import LoadingList from '../../loading-list';

import Popup from '../../../common.blocks/popup';
import Icon from '../../../common.blocks/icon';
import Spin from '../../../common.blocks/spin';

import './slot.css';

const classNames = cn('slot');

export default class Slot extends React.Component {
    state = {
        isHistoryLoaded: false
    }

    _elems = {}

    componentWillReceiveProps(nextProps) {
        if (!this._shouldShowHistory() && this._shouldShowHistory(nextProps)) {
            this.setState({ isHistoryLoaded: false });
        }
    }

    _shouldShowHistory = (props = this.props) => {
        return props.isSelected && !props.isEditing;
    }

    render() {
        const { slot, isSelected, onClick } = this.props;
        const { type, cell, state } = slot;

        const isEmpty = state === 'empty';
        const isUndefined = state === 'undefined';
        const isInventory = state === 'inventory';
        const isDevice = !isEmpty && !isUndefined && !isInventory;

        return (
            <div className={classNames({ type: type.id, selected: isSelected })}>
                <div
                    className={classNames('cell')}
                    onClick={onClick}
                >
                    <div className={classNames('selection-filler')} />
                    {isDevice ? this._deviceJsx() : <div className={classNames('wire')} />}
                    {isUndefined && <Icon type="question-blue" />}
                    {isInventory && (
                        <div className={classNames('inventory')}>
                            <Spin size="xxs" progress />
                        </div>
                    )}
                    <div className={classNames('cell-anchor')} ref={this._cacheCellAnchor} />
                </div>
                <div className={classNames('cell-name')}>{cell}</div>
                {this._shouldShowHistory() && this._historyPopupJsx()}
            </div>
        );
    }

    _deviceJsx() {
        return (
            <svg width="100%" height="100%">
                <rect width="100%" height="100%" rx="4" ry="4" className={classNames('device')} />
                <rect
                    className={classNames('device-screen')}
                    width="90%"
                    height="85%"
                    rx="4"
                    ry="4"
                    x="5%"
                    y="3%"
                />
                <rect
                    className={classNames('device-button')}
                    width="5"
                    height="2"
                    rx="1"
                    ry="1"
                    x="10"
                    y="91%"
                />
            </svg>
        );
    }

    _onHistoryLoad = () => {
        this.setState({ isHistoryLoaded: true });
    }

    _historyPopupJsx = () => {
        const { isHistoryLoaded } = this.state;
        const { cubeId, slot, onClick } = this.props;

        return (
            <Popup
                visible={isHistoryLoaded}
                hiding
                hasTail
                tailSize={15}
                anchor={this._elems.cellAnchor}
                directions={[
                    'right-top',
                    'right-center',
                    'right-bottom'
                ]}
                onOutsideClick={onClick}
            >
                <div className={classNames('history-popup')}>
                    <LoadingList
                        type="slotHistory"
                        entityType="tesseract"
                        id={cubeId}
                        options={{ slot: slot.name }}
                        onLoad={this._onHistoryLoad}
                    />
                    <div className={classNames('close')}>
                        <Icon type="close" onClick={onClick} />
                    </div>
                </div>
            </Popup>
        );
    }

    _cacheCellAnchor = elem => {
        this._elems.cellAnchor = elem;
    }

    static propTypes = {
        cubeId: PropTypes.string.isRequired,
        slot: PropTypes.object.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isEditing: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired
    }
}
