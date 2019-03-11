import React from 'react';
import PropTypes from 'prop-types';

import DialogModal from '../dialog-modal';

const ConfirmationModal = ({ title, message, type, onConfirm, onCancel, onDecline }) => {
    const controls = [
        {
            key: 'yes',
            content: console.log('confirm'),
            action: true,
            onClick: onConfirm
        },
        type === 'yes-no' &&
            {
                key: 'no',
                content: console.log('decline'),
                onClick: onDecline
            },
        {
            key: 'cancel',
            content: console.log('cancel'),
            onClick: onCancel
        }
    ].filter(Boolean);

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

ConfirmationModal.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['yes', 'yes-no']),
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDecline: PropTypes.func
};

ConfirmationModal.defaultProps = {
    type: 'yes'
};

export default ConfirmationModal;
