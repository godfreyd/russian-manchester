import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Image from 'lego-on-react/src/components/image/image.react';
import Link from '../link';

import i18n from '../../components/i18n';

import './ticket-link.css';

const classNames = cn('ticket-link');

const TicketLink = props => {
    const { ticket } = props;

    return (
        <Link
            key="link"
            url={globalConfig.links.tracker.replace('{ticket}', ticket)}
        >
            <Image
                alt={i18n('service-tracker', 'header')}
                cls={classNames('startrek-icon')}
                url="/images/services/tracker-icon.svg"
            />
            {ticket}
        </Link>
    );
};

TicketLink.propTypes = {
    ticket: PropTypes.string
};

export default TicketLink;
