import React from 'react';
import { withNaming } from '@bem-react/classname';
import PropTypes from 'prop-types';
import ReactHoverObserver from 'react-hover-observer';

import Checkbox from '../checkbox';

import Popup from '../popup';

import './checkbox-with-tooltip.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
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
        const {
            name,
            checked,
            label,
            onChange,
            children
        } = this.props;
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
                        <Checkbox
                            name={name}
                            checked={checked}
                            onChange={onChange}
                        >
                            {label}
                        </Checkbox>
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

    static propTypes = {
        name: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        label: PropTypes.node.isRequired,
        onChange: PropTypes.func.isRequired,
        children: PropTypes.node
    }
}
