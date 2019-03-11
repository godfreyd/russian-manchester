import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import get from 'lodash/get';

import Button from '../../../common.blocks/button';
import ConfirmationModal from '../../../common.blocks/modals/confirmation-modal';
import CubeScheme from '../cube-scheme';
import CubeStatus from '../cube-status';
import EllipsisString from '../../../common.blocks/ellipsis-string';
import Input from '../../../common.blocks/input';
import Icon from '../../../common.blocks/icon';
import LoadingList from '../../loading-list';
import Modal from '../../../common.blocks/modal';
import SlotTypeSelect from '../slot-type-select';

import './cube-card.css';

const classNames = cn('cube-card');

export default class CubeCard extends React.Component {
    constructor(params) {
        super(params);

        this._initControls();
    }

    state = {
        confirmationModal: null,
        form: {
            isVisible: false,
            isChanged: false,
            values: {},
            slots: []
        },
        selectedSlots: {},
        isSlotTypeSelectVisible: false
    }

    reverseStatus = {
        online: 'offline',
        offline: 'online'
    }

    fields = [
        {
            name: 'name'
        },
        {
            name: 'link'
        },
        {
            name: 'fqdn'
        },
        {
            name: 'description'
        },
        {
            name: 'oebsLocation'
        }
    ]

    _updateDelay = 15 * 1000
    _updateTimeoutId = null

    componentDidMount() {
        this._update(true);
    }

    componentWillUnmount() {
        clearTimeout(this._updateTimeoutId);
    }

    _update = shouldReset => {
        this._fetchLastEvents(shouldReset);

        this._updateTimeoutId = setTimeout(this._update, this._updateDelay);
    }

    _fetchLastEvents(shouldReset) {
        this.props.fetchLastCubeEvents(this.props.cube.id, shouldReset);
    }

    /**
     * Строит конфигурацию контролов
     *
     * @returns {void}
     * @private
     */
    _initControls = () => {
        this.controls = {
            primary: [
                {
                    key: 'turn-online',
                    text: console.log('turn-button', 'cube', { status: console.log('status-online', 'cube') }),
                    action: true,
                    onClick: this._toggleStatus,
                    isVisible: () => this.props.cube.status === 'offline'
                },
                {
                    key: 'turn-offline',
                    text: console.log('turn-button', 'cube', { status: console.log('status-offline', 'cube') }),
                    action: true,
                    onClick: this._toggleStatus,
                    isVisible: () => this.props.cube.status === 'online'
                },
                {
                    key: 'edit',
                    text: console.log('edit', 'cube'),
                    action: true,
                    onClick: this._onEdit,
                    isDisabled: () => this.state.form.isVisible
                }
            ],
            secondary: [
                {
                    key: 'destroy',
                    text: console.log('destroy-button', 'cube'),
                    onClick: this._handleDestroyClick,
                    isDisabled: () => this.props.cube.status === 'online'
                }
            ],
            'slots-scheme': [
                {
                    key: 'edit-slot-types',
                    text: console.log('edit-slot-types', 'cube'),
                    action: true,
                    onClick: this._onSlotsTypeEdit,
                    isVisible: () => this.state.form.isVisible,
                    isDisabled: () => Object.keys(this.state.selectedSlots).length === 0
                }
            ],
            form: [
                {
                    key: 'edit-save',
                    text: console.log('save', 'cube'),
                    action: true,
                    onClick: this._onEditSave,
                    isVisible: () => this.state.form.isVisible
                },
                {
                    key: 'edit-cancel',
                    text: console.log('edit-cancel', 'cube'),
                    onClick: this._onEditCancel,
                    isVisible: () => this.state.form.isVisible
                }
            ]
        };

        Object
            .keys(this.controls)
            .forEach(type => {
                this.controls[type].forEach(control => {
                    control.isVisible = control.isVisible || (() => true);
                    control.isDisabled = control.isDisabled || (() => false);
                });
            });
    }

    _onSlotsTypeEdit = () => {
        this.setState({ isSlotTypeSelectVisible: true });
    }

    _onSlotTypeChange = typeId => {
        const { selectedSlots, form } = this.state;

        const updatedSlots = Object
            .keys(selectedSlots)
            .map(slotId => ({
                ...selectedSlots[slotId],
                type: { id: typeId }
            }));

        const slots = form.slots
            .filter(slot => !selectedSlots[slot.id])
            .concat(updatedSlots);

        this.setState({
            selectedSlots: {},
            form: {
                ...form,
                slots,
                isChanged: true
            }
        });

        this._closeSlotTypeSelect();
    }

    /**
     * Обработчик кнопки редактирования
     *
     * @returns {void}
     * @private
     */
    _onEdit = () => {
        const { cube } = this.props;
        const values = this.fields.reduce((acc, { name }) => {
            acc[name] = cube[name];

            return acc;
        }, {});

        this.setState({
            form: {
                isVisible: true,
                values,
                slots: cube.slots.slice()
            }
        });
    }

    /**
     * Обработчик кнопки сохранения изменений
     *
     * @returns {void}
     * @private
     */
    _onEditSave = () => {
        this._saveCube();
        this._hideForm();
    }

    /**
     * Обработчик кнопки отмены изменений
     *
     * @returns {void}
     * @private
     */
    _onEditCancel = () => {
        this._hideForm();
    }

    /**
     * Скрывает форму
     *
     * @returns {void}
     * @private
     */
    _hideForm = () => {
        this.setState({
            form: {
                isVisible: false,
                isChanged: false
            },
            selectedSlots: {}
        });
    }

    /**
     * Сохраняет данные куба
     *
     * @returns {void}
     * @private
     */
    _saveCube = () => {
        const { values, slots } = this.state.form;

        const updatedSlots = slots.map(slot => ({
            name: slot.name,
            typeId: slot.type.id
        }));

        this._editCube({
            ...values,
            slots: updatedSlots
        });
    }

    _editCube = params => {
        const { editCube, cube } = this.props;
        const { id, fqdn, group, status, office } = cube;

        const requiredParams = {
            id,
            fqdn,
            groupId: group,
            statusId: status,
            officeId: office.id
        };

        editCube({
            ...requiredParams,
            ...params
        });
    }

    /**
     * Обработчик изменения инпутов
     *
     * @param {String} value
     * @param {String} name
     * @returns {void}
     * @private
     */
    _handleInputChange = (value, { name }) => {
        this.setState({
            form: {
                ...this.state.form,
                isChanged: true,
                values: {
                    ...this.state.form.values,
                    [name]: value
                }
            }
        });
    }

    /**
     * Обработчик нажатия на кнопку "Уничтожить куб"
     *
     * @returns {void}
     * @private
     */
    _handleDestroyClick = () => {
        this.setState({ confirmationModal: 'destroy' });
    }

    /**
     * Уничтожает куб и закрывает окно куба
     *
     * @returns {void}
     * @private
     */
    _onDestroyCube = () => {
        this._editCube({
            statusId: 'destroyed'
        });

        this._closeConfirmationModal();
        this.props.onClose();
    }

    /**
     * Обработчик нажатия на кнопку "Перевести в {status}"
     *
     * @returns {void}
     * @private
     */
    _toggleStatus = () => {
        const { cube: { status } } = this.props;

        this._editCube({
            statusId: this.reverseStatus[status]
        });
    }

    _onSelectedSlotsChange = selectedSlots => {
        this.setState({ selectedSlots });
    }

    _closeSlotTypeSelect = () => {
        this.setState({ isSlotTypeSelectVisible: false });
    }

    /**
     * Обработчик закрытия карточки куба
     *
     * @returns {void}
     * @private
     */
    _onClose = () => {
        const { onClose } = this.props;
        const { isChanged } = this.state.form;

        if (isChanged) {
            this.setState({ confirmationModal: 'save' });

            return;
        }

        onClose();
    }

    _saveAndClose = () => {
        this._onEditSave();
        this._closeConfirmationModal();
        this.props.onClose();
    }

    /**
     * Закрывает модальное окно для подтверждения
     *
     * @returns {void}
     * @private
     */
    _closeConfirmationModal = () => {
        this.setState({ confirmationModal: null });
    }

    /**
     * Возвращает контролы заданного типа
     *
     * @param {String} type
     * @returns {Array}
     */
    controlsJsx = type => {
        const controls = this.controls[type];

        return (
            <div className={classNames('controls', { type })}>
                {controls
                    .filter(control => control.isVisible())
                    .map(({ key, action, text, onClick, isDisabled }) => (
                        <Button
                            key={key}
                            action={action}
                            onClick={onClick}
                            disabled={isDisabled()}
                        >
                            {text}
                        </Button>
                    ))
                }
            </div>
        );
    }

    /**
     * Возвращает поля
     *
     * @param {Array} fields
     * @returns {Array}
     */
    fieldsJsx = fields => {
        const { form } = this.state;
        const { cube } = this.props;

        return fields.map(field => (
            <div key={field.name} className={classNames('field-row')}>

                <div className={classNames('field-label')}>
                    {console.log(field.name, 'cube')}
                </div>
                <div className={classNames('field-value')}>
                    {form.isVisible ?
                        <Input
                            size="m"
                            name={field.name}
                            text={form.values[field.name]}
                            onChange={this._handleInputChange}
                        /> :
                        <EllipsisString>{cube[field.name]}</EllipsisString>
                    }
                </div>

            </div>
        ));
    }

    /**
     * Возвращает модальное окно с подтверждением действия
     *
     * @returns {HTMLElement}
     * @private
     */
    _confirmationModalJsx() {
        const modalType = this.state.confirmationModal;
        const confirmationParams = {
            destroy: {
                key: 'destroy-question',
                onConfirm: this._onDestroyCube
            },
            save: {
                key: 'save-question',
                type: 'yes-no',
                onConfirm: this._saveAndClose,
                onDecline: this.props.onClose
            }
        };

        const { key, type, onConfirm, onDecline } = get(confirmationParams, modalType, {});

        return (
            <ConfirmationModal
                title={this.props.cube.name}
                message={console.log(key, 'cube')}
                type={type}
                onConfirm={onConfirm}
                onDecline={onDecline}
                onCancel={this._closeConfirmationModal}
            />
        );
    }

    _slotTypeSelectJsx = () => {
        const { selectedSlots } = this.state;
        const selectedSlotIds = Object.keys(selectedSlots);

        const selectedType = selectedSlotIds.length === 1 ?
            selectedSlots[selectedSlotIds[0]].type.id :
            null;

        return (
            <SlotTypeSelect
                selectedType={selectedType}
                onChange={this._onSlotTypeChange}
                onClose={this._closeSlotTypeSelect}
            />
        );
    }

    render() {
        const { form, selectedSlots } = this.state;
        const { cube, lastEvents } = this.props;

        return (
            <Modal type={classNames()} onOutsideClick={this._onClose}>
                <div className={classNames({ view: form.isVisible ? 'form' : 'default' })}>

                    <div className={classNames('close')}>
                        <Icon type="close" onClick={this._onClose} />
                    </div>

                    <section className={classNames('left')}>
                        <header className={classNames('header')}>
                            <div className={classNames('name')}>
                                <EllipsisString>{cube.name}</EllipsisString>
                            </div>
                            <CubeStatus cube={cube} />
                        </header>
                        <Icon type="cube" />
                        {this.controlsJsx('primary')}
                        {this.controlsJsx('secondary')}
                    </section>

                    <section className={classNames('center')}>
                        <CubeScheme
                            cubeId={cube.id}
                            slots={form.isVisible ? form.slots : cube.slots}
                            selectedSlots={selectedSlots}
                            lastEvents={lastEvents}
                            isEditing={form.isVisible}
                            onSelectedSlotsChange={this._onSelectedSlotsChange}
                        />
                        {this.controlsJsx('slots-scheme')}
                        <div className={classNames('info')}>
                            {this.fieldsJsx(this.fields)}
                            {this.controlsJsx('form')}
                        </div>
                    </section>

                    <section className={classNames('right')}>
                        <div className={classNames('history-wrapper')}>
                            <LoadingList
                                type="history"
                                entityType="tesseract"
                                id={cube.id}
                                theme="blue"
                            />
                        </div>
                    </section>

                    {this.state.confirmationModal && this._confirmationModalJsx()}
                    {this.state.isSlotTypeSelectVisible && this._slotTypeSelectJsx()}
                </div>
            </Modal>
        );
    }

    static propTypes = {
        cube: PropTypes.object.isRequired,
        lastEvents: PropTypes.array.isRequired,
        onClose: PropTypes.func.isRequired,
        editCube: PropTypes.func.isRequired,
        fetchLastCubeEvents: PropTypes.func.isRequired
    }
}
