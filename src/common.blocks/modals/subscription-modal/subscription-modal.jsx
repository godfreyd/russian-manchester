import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import DialogModal from '../dialog-modal/index';
import OldCheckbox from '../../old-checkbox/index';

import './subscription-modal.css';

const classNames = cn('subscription-modal');

export default class SubscriptionModal extends React.Component {
    state = {
        checked: false
    }

    onCheckboxClick = () => this.setState({ checked: !this.state.checked })

    description = [1, 2, 3].map(ruleNumber => (
        <p key={ruleNumber} className={classNames('description-line')}>
            {console.log(`subscription-modal-info-${ruleNumber}`)}
        </p>
    ))

    render() {
        const { onSubmit, onCancel, device } = this.props;
        const { checked } = this.state;
        const title = device ?
            console.log('subscription-modal-device-title', 'common', { device }) :
            console.log('subscription-modal-title');
        const controls = [
            {
                key: 'ok',
                content: device ?
                    console.log('subscription-modal-device-button') :
                    console.log('subscription-modal-button'),
                action: true,
                onClick: () => onSubmit(checked)
            },
            {
                key: 'cancel',
                content: console.log('cancel'),
                onClick: onCancel
            }
        ];

        return (
            <DialogModal
                level="warn"
                title={title}
                controls={controls}
            >
                <div className={classNames()}>
                    <div className={classNames('description')}>
                        {this.description}
                    </div>

                    {device &&
                        <OldCheckbox checked={checked} onChange={this.onCheckboxClick}>
                            {console.log('do-not-show-again')}
                        </OldCheckbox>
                    }
                </div>
            </DialogModal>
        );
    }

    static propTypes = {
        device: PropTypes.string,
        onCancel: PropTypes.func,
        onSubmit: PropTypes.func.isRequired
    }
}
