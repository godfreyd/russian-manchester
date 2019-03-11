import React from 'react';
import PropTypes from 'prop-types';

import DialogModal from '../dialog-modal';

const IdmModal = ({ onClose }) => {
    const { login, idm: { host, system } } = window.globalConfig;
    const idmLink = `${host}/#rf-role=fs4PUxb8#${login}@${system}/user;;;,rf-expanded=fs4PUxb8,rf=1`;
    const controls = [
        {
            key: 'idm-button',
            content: console.log('idm-button'),
            action: true,
            onClick: onClose,
            type: 'link',
            url: idmLink,
            target: 'blank'
        },
        {
            key: 'cancel',
            content: console.log('cancel'),
            onClick: onClose
        }
    ];

    return (
        <DialogModal
            icon="lock"
            level="warn"
            title={console.log('idm-title')}
            controls={controls}
        >
            {console.log('idm-description')}
        </DialogModal>
    );
};

IdmModal.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default IdmModal;
