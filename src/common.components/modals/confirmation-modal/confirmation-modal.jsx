import React from 'react';
import propTypes from 'prop-types';

import DialogModal from '../dialog-modal';

import i18n from '../../../components/i18n';

const ConfirmationModal = ({ title, message, type, onConfirm, onCancel, onDecline }) => {
    const controls = [
        {
            key: 'yes',
            content: i18n('confirm'),
            action: true,
            onClick: onConfirm
        },
        type === 'yes-no' &&
            {
                key: 'no',
                content: i18n('decline'),
                onClick: onDecline
            },
        {
            key: 'cancel',
            content: i18n('cancel'),
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
    title: propTypes.string.isRequired,
    message: propTypes.string.isRequired,
    type: propTypes.oneOf(['yes', 'yes-no']),
    onConfirm: propTypes.func.isRequired,
    onCancel: propTypes.func.isRequired,
    onDecline: propTypes.func
};

ConfirmationModal.defaultProps = {
    type: 'yes'
};

export default ConfirmationModal;
