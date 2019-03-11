import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import Input from '../input';
import Popup from '../popup';
import './suggest.css';
const classNames = cn('suggest');

export default class Suggest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestIndex: -1,
            value: props.inputInitValue || '', // Значение в поле инпута
            suggestValue: '', // Значение в инпуте, по которому построился саджест
            prevInitValue: props.inputInitValue,
            isVisible: true
        };
    }

    componentWillReceiveProps(nextProps) {
        const { inputInitValue } = nextProps;
        const { prevInitValue } = this.state;

        if (inputInitValue && prevInitValue !== inputInitValue) {
            this.setState({
                value: inputInitValue,
                prevInitValue: inputInitValue
            });
        }
    }

    _refInputCallback = ref => {
        this.input = ref;
    }

    /**
     * Обработчик ввода в инпут
     *
     * @param {String} value
     * @returns {void}
     * @private
     */
    _handleInputChange = value => {
        const { fetchSuggest, onInputChange } = this.props;

        if (value.trim()) {
            fetchSuggest(value.trim());
            this.setState({ isVisible: true });
        }

        if (onInputChange) {
            onInputChange(value.trim());
        }

        this.setState({
            value,
            suggestValue: value,
            suggestIndex: -1
        });
    }

    /**
     * Выделение опции по индексу
     *
     * @param {Number} suggestIndex
     * @returns {void}
     * @private
     */
    _focusOption(suggestIndex) {
        const { results } = this.props;

        if (suggestIndex < 0) {
            suggestIndex = results.length - 1;
        }

        if (suggestIndex > results.length - 1) {
            suggestIndex = 0;
        }

        this.setState({ suggestIndex });
    }

    /**
     * Обработчик нажатия на клавиши в саджесте
     *
     * @param {Object} event
     * @returns {void}
     * @private
     */
    _handleKeyDown = event => {
        // eslint-disable-next-line
        switch (event.key) {
            case 'Enter': {
                event.preventDefault();
                const value = this.state.suggestIndex > -1 ?
                    this.props.results[this.state.suggestIndex] :
                    this.state.value;

                this._handleSelectOption(value);
                break;
            }

            case 'ArrowDown': {
                event.preventDefault();
                this._focusOption(this.state.suggestIndex + 1);
                break;
            }

            case 'ArrowUp': {
                event.preventDefault();
                this._focusOption(this.state.suggestIndex - 1);
                break;
            }

            // No Default

        }
    }

    /**
     * Закрывает саджест
     * @private
     */
    _close = () => {
        this.setState({ isVisible: false });
    }

    /**
     * Обработчик выбора опции в саджесте
     *
     * @param {Object} value
     * @returns {void}
     * @private
     */
    _handleSelectOption = value => {
        this.setState({ value, isVisible: false });
        this.props.onSelectOption(value);
    }

    render() {
        const { results = [], type, inputPlaceholder, getOptionValue } = this.props;
        const { value = '', isVisible, suggestIndex, suggestValue } = this.state;
        const isPopupVisible = isVisible && results.length > 0 && Boolean(this.input);

        return (
            <div className={classNames()}>

                <div
                    className={classNames('input', { type })}
                    ref={this._refInputCallback}
                >
                    <Input
                        theme="normal"
                        text={value.toString()}
                        size="m"
                        placeholder={inputPlaceholder}
                        pin="round-round"
                        onKeyDown={this._handleKeyDown}
                        onChange={this._handleInputChange}
                    />

                </div>

                <Popup
                    visible={isPopupVisible}
                    anchor={this.input}
                    directions={['bottom-center']}
                    onOutsideClick={this._close}
                    mainOffset={10}
                >
                    <div className={classNames('content', { type })}>
                        {results.map((option, index) => (
                            <div
                                key={option}
                                className={classNames('option', { type, active: index === suggestIndex })}
                                onMouseEnter={this._focusOption.bind(this, index)}
                                onClick={this._handleSelectOption.bind(this, option)}
                            >
                                {getOptionValue ? getOptionValue(option, suggestValue) : option}
                            </div>
                        ))}
                    </div>
                </Popup>

            </div>
        );
    }

    static get propTypes() {
        return {
            results: PropTypes.array,
            type: PropTypes.string.isRequired,
            inputPlaceholder: PropTypes.string.isRequired,
            inputInitValue: PropTypes.string,
            fetchSuggest: PropTypes.func.isRequired,
            getOptionValue: PropTypes.func,
            onInputChange: PropTypes.func,
            onSelectOption: PropTypes.func.isRequired
        };
    }
}
