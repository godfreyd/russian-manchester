import React from 'react';
import propTypes from 'prop-types';

import { freezeBody, unfreezeBody } from '../../lib/freezer';

import LegoModal from 'lego-on-react/src/components/modal/modal.react';

import 'lego-on-react/src/components/modal/modal.css';

class Modal extends React.PureComponent {
    componentDidMount() {
        freezeBody();
    }

    componentWillUnmount() {
        unfreezeBody();
    }

    render() {
        const { children, type, ...props } = this.props;

        return (
            <LegoModal
                mix={{
                    block: 'modal',
                    mods: { type }
                }}
                visible
                {...props}
            >
                {children}
            </LegoModal>
        );
    }

    static propTypes = {
        type: propTypes.string.isRequired,
        children: propTypes.node.isRequired
    }
}

export default Modal;
