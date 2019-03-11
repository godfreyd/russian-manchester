import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Popup from '../popup';
import Icon from '../icon';

import './tooltip.css';

const classNames = cn('tooltip');

export default class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: null,
            visible: false
        };
    }

    componentDidMount() {
        this.setState({
            icon: this.icon,
            visible: false
        });
    }

    _refIconCallback = icon => {
        this.icon = icon;
    }

    /**
     * Показывает/скрывает попап
     *
     * @returns {void}
     * @private
     */
    _togglePopup = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        const { children, type } = this.props;
        const { visible, icon } = this.state;

        return (
            <div className={classNames({ type })}>

                <div ref={this._refIconCallback} className={classNames('icon')}>
                    <Icon onClick={this._togglePopup} type={type} />
                </div>
                <Popup
                    hasTail
                    hiding
                    tailSize={15}
                    visible={visible}
                    anchor={icon}
                    directions={['right-top']}
                    onOutsideClick={this._togglePopup}
                    mainOffset={15}
                    secondaryOffset={-35}
                    tailOffset={35}
                >
                    {children}
                </Popup>

            </div>
        );
    }

    static get propTypes() {
        return {
            type: PropTypes.string.isRequired,
            children: PropTypes.node.isRequired
        };
    }
}
