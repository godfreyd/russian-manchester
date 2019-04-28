import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import TicketLink from '../../common.components/ticket-link';
import UserLogin from '../../common.components/user-login';

import ProductInfoRow from '../product-info-row';

import i18n from '../i18n';

import './product-status.css';

const classNames = cn('product-status');

export default class ProductStatus extends React.Component {
    _renderTicket = ticket => {
        return [
            <span key="prefix-text" className={classNames('indent')}>{i18n('in', 'common')}</span>,
            <TicketLink key="ticket" ticket={ticket} />
        ];
    }

    render() {
        const { productInfo = {}, location = productInfo.location } = this.props;
        const { locations } = globalConfig;
        const {
            operator = '',
            slot = '',
            eventTicket,
            tesseract = {}
        } = productInfo;

        const tesseractName = tesseract.name || '';

        const isInCube = locations.free.includes(location);
        const hasTicket = locations.technical.includes(location);

        return (
            <div className={classNames()}>
                <ProductInfoRow infoKey={i18n('status', 'product')}>
                    {i18n(`status-${location}`, 'product')}
                </ProductInfoRow>
                <ProductInfoRow infoKey={i18n(`status-${location}-label`, 'product')}>
                    {isInCube ?
                        `${tesseractName}${slot && ` → ${slot}`}` :
                        <UserLogin login={operator} />
                    }
                    {hasTicket && eventTicket && this._renderTicket(eventTicket)}
                </ProductInfoRow>
            </div>
        );
    }

    static propTypes = {
        productInfo: PropTypes.object,
        location: PropTypes.string
    }
}
