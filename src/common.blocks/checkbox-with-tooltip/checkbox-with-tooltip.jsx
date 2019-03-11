import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import ReactHoverObserver from 'react-hover-observer';

import LegoCheckbox from 'lego-on-react/src/components/checkbox/checkbox.react';
import Popup from '../popup';

import './checkbox-with-tooltip.css';

const classNames = cn('checkbox-with-tooltip');

export default class CheckboxWithTooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wrapper: null,
            visible: false
        };
    }

    componentDidMount() {
        this.setState({
            wrapper: this.wrapper
        });
    }

    _refWrapperCallback = wrapper => {
        this.wrapper = wrapper;
    }

    /**
     * Показывает/скрывает подсказку при наведении на чекбокс
     *
     * @param {Boolean} value
     * @returns {void}
     * @private
     */
    _togglePopup = value => {
        this.setState({
            visible: value
        });
    }

    render() {
        const { name, checked, onChange, children, text } = this.props;
        const { visible, wrapper } = this.state;

        return (
            <div className={classNames()}>

                <ReactHoverObserver
                    hoverDelayInMs={200}
                    hoverOffDelayInMs={100}
                    onMouseEnter={() => this._togglePopup(true)}
                    onMouseLeave={() => this._togglePopup(false)}
                >
                    <div ref={this._refWrapperCallback}>
                        <LegoCheckbox
                            name={name}
                            checked={checked}
                            onChange={onChange}
                        >
                            {text}
                        </LegoCheckbox>
                    </div>
                </ReactHoverObserver>
                <Popup
                    hasTail
                    tailSize={15}
                    visible={Boolean(children) && visible}
                    anchor={wrapper}
                    directions={['right-center']}
                    onOutsideClick={() => this._togglePopup(false)}
                    mainOffset={15}
                >
                    <div className={classNames('content')}>{children}</div>
                </Popup>

            </div>
        );
    }

    static get propTypes() {
        return {
            name: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired,
            onChange: PropTypes.func.isRequired,
            children: PropTypes.node.isRequired,
            text: PropTypes.string.isRequired
        };
    }
}
