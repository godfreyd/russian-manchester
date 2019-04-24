import React from 'react';
import propTypes from 'prop-types';

import DialogModal from '../dialog-modal';

import i18n from '../../../components/i18n';

const IdmModal = ({ onClose }) => {
    const { login, idm: { host, system } } = globalConfig;
    const idmLink = `${host}/#rf-role=fs4PUxb8#${login}@${system}/user;;;,rf-expanded=fs4PUxb8,rf=1`;
    const controls = [
        {
            key: 'idm-button',
            content: i18n('idm-button'),
            action: true,
            onClick: onClose,
            type: 'link',
            url: idmLink,
            target: 'blank'
        },
        {
            key: 'cancel',
            content: i18n('cancel'),
            onClick: onClose
        }
    ];

    return (
        <DialogModal
            icon="lock"
            level="warn"
            title={i18n('idm-title')}
            controls={controls}
        >
            {i18n('idm-description')}
        </DialogModal>
    );
};

IdmModal.propTypes = {
    onClose: propTypes.func.isRequired
};

export default IdmModal;
