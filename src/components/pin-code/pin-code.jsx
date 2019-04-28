import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import EllipsisString from '../../common.components/ellipsis-string';
import ErrorTooltip from '../../common.components/error-tooltip';
import Icon from '../../common.components/icon';
import Input from '../../common.components/input';
import Tooltip from '../../common.components/tooltip';

import i18n from '../i18n';

import './pin-code.css';

const classNames = cn('pin-code');

class PinCode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            isError: false,
            value: props.value || ''
        };
    }

    componentWillReceiveProps(nextProps) {
        const { value = '' } = nextProps;

        this.setState({ value });
    }

    /**
     * Сохраняет ссылку на элемент input
     * @param {Object} input
     * @private
     */
    _createInputRef = input => {
        this._input = input;
    }

    /**
     * При изменении значения input обновляем его в state
     * @param {String} value
     * @private
     */
    _onInputChange = value => {
        const isError = value.length > 0 && !value.match(/^\d+$/);

        this.setState({
            isError,
            value: isError ? this.state.value : value
        });
    }

    /**
     * При клике на иконку включаем редактирование пин кода
     * @private
     */
    _onEditClick = () => {
        this.setState({
            isEdit: true
        });
    }

    /**
     * При нажатии на крест отменяем изменения
     * @private
     */
    _onCancel = () => {
        this.setState({
            isEdit: false,
            isError: false,
            value: this.props.value || ''
        });
    }

    /**
     * При клике вокруг тултипа с ошибкой закрываем его
     * @private
     */
    _onTooltipClose = () => {
        this.setState({
            isError: false
        });
    }

    /**
     * При клике на кнопку обновляем пин код
     * @private
     */
    _onSubmit = () => {
        const { value } = this.state;

        this.setState({
            isError: false,
            isEdit: false
        });

        this.props.onSave(value);
    }

    render() {
        const { value = '' } = this.props;
        const { isEdit, isError } = this.state;

        return (
            <div className={classNames()}>
                <div className={classNames('top')}>
                    <div className={classNames('text')}>
                        <label className={classNames('label')}>
                            {i18n('pin-code', 'product')}
                        </label>
                        <div className={classNames('input')} ref={this._createInputRef}>
                            {isEdit ?
                                <Input
                                    size="m"
                                    autoFocus
                                    text={this.state.value}
                                    onChange={this._onInputChange}
                                /> :
                                <EllipsisString>
                                    {value || i18n('no-pin', 'product')}
                                </EllipsisString>
                            }
                        </div>
                    </div>
                    {isEdit && (
                        <div className={classNames('controls')}>
                            <div className={classNames('button')}>
                                <Icon type="tick" onClick={this._onSubmit} />
                            </div>
                            <div className={classNames('button')}>
                                <Icon type="cancel" onClick={this._onCancel} />
                            </div>
                        </div>
                    )}
                    {!isEdit && (
                        <div className={classNames('controls')}>
                            <div className={classNames('button')}>
                                <Icon type="pencil" onClick={this._onEditClick} />
                            </div>
                            <div className={classNames('button')}>
                                <Tooltip type="question">
                                    <div className={classNames('tooltip')}>
                                        {i18n('reset-graphic-key')}
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                    )}
                </div>
                <ErrorTooltip
                    anchor={this._input}
                    visible={isError}
                    autoclosable
                    onOutsideClick={this._onTooltipClose}
                >
                    {i18n('validation-number', 'error')}
                </ErrorTooltip>
            </div>
        );
    }

    static propTypes = {
        onSave: PropTypes.func.isRequired,
        value: PropTypes.string
    }
}

export default PinCode;
