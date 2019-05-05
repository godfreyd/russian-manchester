import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import DialogModal from '../dialog-modal';
import UserLogin from '../../user-login';

import i18n from '../../../components/i18n';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('grab-modal');

const GrabModal = ({ operator, productName, onAgree, onCancel }) => {
    const controls = [
        {
            key: 'ok',
            content: i18n('grab-button'),
            action: true,
            onClick: onAgree
        },
        {
            key: 'cancel',
            content: i18n('cancel'),
            onClick: onCancel
        }
    ];

    const title = (
        <div>
            {i18n('grab-operator', 'common', { productName })} <UserLogin login={operator} />
        </div>
    );

    return (
        <DialogModal
            level="warn"
            title={title}
            controls={controls}
        >
            <div className={classNames('modal_description')}>{i18n('grab-description')}</div>
        </DialogModal>
    );
};

GrabModal.propTypes = {
    operator: propTypes.string.isRequired,
    productName: propTypes.string.isRequired,
    onAgree: propTypes.func.isRequired,
    onCancel: propTypes.func.isRequired
};

export default GrabModal;
