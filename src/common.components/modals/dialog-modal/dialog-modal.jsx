import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import get from 'lodash/get';

import Button from '../../button';
import Icon from '../../icon';
import Modal from '../../modal';

import './dialog-modal.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('dialog-modal');

const defaultIcons = {
    'warn': 'warning',
    'success': 'check'
};

const DialogModal = ({ title, icon, controls, level, children, ...props }) => (
    <Modal type={classNames()} {...props}>
        <div className={classNames()}>
            <div className={classNames('border', { level })}>
                <Icon type={icon || get(defaultIcons, level)} />
            </div>

            <div className={classNames('body')}>
                {title && <div className={classNames('title')}>{title}</div>}
                <div className={classNames('content')}>{children}</div>
                <div className={classNames('controls')}>
                    {controls.map(({ key, content, ...controlProps }) => (
                        <Button key={key} {...controlProps}>
                            {content}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    </Modal>
);

DialogModal.propTypes = {
    title: propTypes.string,
    icon: propTypes.string,
    controls: propTypes.array.isRequired,
    level: propTypes.string.isRequired,
    children: propTypes.node.isRequired
};

export default DialogModal;
