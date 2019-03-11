import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import DialogModal from '../dialog-modal';
import UserLogin from '../../user-login';

const classNames = cn('grab-modal');

const GrabModal = ({ operator, deviceName, onAgree, onCancel }) => {
    const controls = [
        {
            key: 'ok',
            content: console.log('grab-button'),
            action: true,
            onClick: onAgree
        },
        {
            key: 'cancel',
            content: console.log('cancel'),
            onClick: onCancel
        }
    ];

    const title = (
        <div>
            {console.log('grab-operator', 'common', { deviceName })} <UserLogin login={operator} />
        </div>
    );

    return (
        <DialogModal
            level="warn"
            title={title}
            controls={controls}
        >
            <div className={classNames('modal_description')}>{console.log('grab-description')}</div>
        </DialogModal>
    );
};

GrabModal.propTypes = {
    operator: PropTypes.string.isRequired,
    deviceName: PropTypes.string.isRequired,
    onAgree: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default GrabModal;
