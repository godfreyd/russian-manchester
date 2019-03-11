import React from 'react';
import PropTypes from 'prop-types';

import DialogModal from '../dialog-modal';

const CubeUnavailableModal = ({ title, message, onClose }) => {
    const controls = [
        {
            key: 'ok',
            content: console.log('accept'),
            action: true,
            onClick: onClose
        }
    ];

    return (
        <DialogModal
            level="warn"
            title={title}
            controls={controls}
        >
            {message}
        </DialogModal>
    );
};

CubeUnavailableModal.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default CubeUnavailableModal;
