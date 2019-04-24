import React from 'react';
import propTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Icon from '../../../common.components/icon';
import Modal from '../../../common.components/modal';

import i18n from '../../i18n';

import './slot-type-select.css';

const classNames = cn('slot-type-select');

export default class SlotTypeSelect extends React.Component {
    _slotTypes = ['micro-usb', 'lightning', 'type-c', 'none']

    render() {
        const { selectedType, onClose } = this.props;

        return (
            <Modal
                type={classNames()}
                onOutsideClick={onClose}
            >
                <div className={classNames()}>
                    <header className={classNames('title')}>
                        {i18n('select-slot-type', 'cube')}
                    </header>
                    <section className={classNames('slot-types')}>
                        {this._slotTypes.map(type => {
                            const selected = selectedType === type;

                            return (
                                <article
                                    key={type}
                                    className={classNames('slot-type', { selected, type })}
                                    onClick={!selected && this._onSlotTypeClick(type)}
                                >
                                    <div className={classNames('slot-type-icon')}>
                                        {this._wireJsx(type)}
                                    </div>
                                    <div className={classNames('slot-type-name')}>
                                        {i18n(`slot-type-${type}`, 'cube')}
                                    </div>
                                </article>
                            );
                        })}
                    </section>
                    <div className={classNames('close')}>
                        <Icon type="close" onClick={onClose} />
                    </div>
                </div>
            </Modal>
        );
    }

    _wireJsx = type => {
        const hasWire = type !== 'none';

        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="46"
                viewBox="0 0 8 46"
            >
                <g fill="none" fillRule="evenodd">
                    <path fill="#FFF" d="M0 2H8V16H0z" />
                    <path className={classNames('wire-part')} strokeWidth="2" d="M1 3H7V15H1z" />
                    <path fill="#FFF" d="M2 0H6V4H2z" />
                    <path className={classNames('wire-part')} strokeWidth="2" d="M3 1H5V3H3z" />
                    <path
                        className={classNames('wire-part')}
                        strokeWidth="3"
                        strokeDasharray={hasWire ? null : '10,10'}
                        d="M4 15V45"
                    />
                    {!hasWire && (
                        <path stroke="#000" strokeWidth="2" d="M1 27l6 6m0 -6l -6 6" />
                    )}
                </g>
            </svg>
        );
    }

    _onSlotTypeClick = type => () => this.props.onChange(type)

    static propTypes = {
        selectedType: propTypes.string,
        onChange: propTypes.func.isRequired,
        onClose: propTypes.func.isRequired
    }
}
