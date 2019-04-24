import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Button from '../button';
import Modal from '../modal';

import i18n from '../../components/i18n';

import './rules-modal.css';

const classNames = cn('rules-modal');

const RulesModal = ({ doAfterClick }) => {
    const imageSrc = '/images/dasha.png';
    const rules = [1, 2, 3, 4].map(ruleNumber => i18n(`rules-step-${ruleNumber}`)).join('<br>');

    return (
        <Modal type={classNames()}>
            <div className={classNames()}>

                <div className={classNames('image-wrap')}>
                    <img src={imageSrc} alt="dasha" />
                </div>

                <div className={classNames('content')}>
                    <div className={classNames('title')}>{i18n('rules-title')}</div>
                    <div className={classNames('rules-wrap')} dangerouslySetInnerHTML={{ __html: rules }} />
                    <Button action onClick={doAfterClick}>{i18n('rules-button')}</Button>
                </div>

            </div>
        </Modal>
    );
};

RulesModal.propTypes = {
    doAfterClick: PropTypes.func.isRequired
};

export default RulesModal;
