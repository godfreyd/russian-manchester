import React from 'react';
import propTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import DialogModal from '../dialog-modal';
import OldCheckbox from '../../old-checkbox';

import i18n from '../../../components/i18n';

import './subscription-modal.css';

const classNames = cn('subscription-modal');

export default class SubscriptionModal extends React.Component {
    state = {
        checked: false
    }

    onCheckboxClick = () => this.setState({ checked: !this.state.checked })

    description = [1, 2, 3].map(ruleNumber => (
        <p key={ruleNumber} className={classNames('description-line')}>
            {i18n(`subscription-modal-info-${ruleNumber}`)}
        </p>
    ))

    render() {
        const { onSubmit, onCancel, product } = this.props;
        const { checked } = this.state;
        const title = product ?
            i18n('subscription-modal-product-title', 'common', { product }) :
            i18n('subscription-modal-title');
        const controls = [
            {
                key: 'ok',
                content: product ?
                    i18n('subscription-modal-product-button') :
                    i18n('subscription-modal-button'),
                action: true,
                onClick: () => onSubmit(checked)
            },
            {
                key: 'cancel',
                content: i18n('cancel'),
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

                    {product &&
                        <OldCheckbox checked={checked} onChange={this.onCheckboxClick}>
                            {i18n('do-not-show-again')}
                        </OldCheckbox>
                    }
                </div>
            </DialogModal>
        );
    }

    static propTypes = {
        product: propTypes.string,
        onCancel: propTypes.func,
        onSubmit: propTypes.func.isRequired
    }
}
