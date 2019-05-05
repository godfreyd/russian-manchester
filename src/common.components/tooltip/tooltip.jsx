import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import Icon from '../icon';
import Popup from '../popup';

import './tooltip.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
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

                <div className={classNames('icon')} ref={this._refIconCallback}>
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

    static propTypes = {
        type: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    }
}
