import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import get from 'lodash/get';

import Button from '../../button/index';
import Icon from '../../icon/index';
import Modal from '../../modal/index';

import './dialog-modal.css';

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
    title: PropTypes.string,
    icon: PropTypes.string,
    controls: PropTypes.array.isRequired,
    level: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default DialogModal;
