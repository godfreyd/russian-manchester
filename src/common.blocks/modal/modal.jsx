import React from 'react';
import PropTypes from 'prop-types';

import MuiModal from '@material-ui/core/Modal';

import { freezeBody, unfreezeBody } from '../../lib/freezer';

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
            <MuiModal
                mix={{
                    block: 'modal',
                    mods: { type }
                }}
                visible
                {...props}
            >
                {children}
            </MuiModal>
        );
    }
}

Modal.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Modal;
