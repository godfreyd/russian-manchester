import React from 'react';
import propTypes from 'prop-types';

import DialogModal from '../dialog-modal';

import i18n from '../../../components/i18n';

const CubeUnavailableModal = ({ title, message, onClose }) => {
    const controls = [
        {
            key: 'ok',
            content: i18n('accept'),
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
    title: propTypes.string.isRequired,
    message: propTypes.string.isRequired,
    onClose: propTypes.func.isRequired
};

export default CubeUnavailableModal;
