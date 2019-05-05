import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import Icon from '../icon';

import './slider.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('slider');

const Slider = ({ title, children, itemsPerPage, totalCount = 0, type, pageNumber }) => {
    const itemsShown = itemsPerPage * pageNumber.value();
    const hasNext = totalCount - itemsShown > 0;
    const hasPrev = pageNumber.value() - 1 > 0;

    return (
        <div className={classNames({ type })}>
            <div className={classNames('header')}>
                <div className={classNames('title')}>{title}</div>
                <div className={classNames('arrows')}>
                    <span className={classNames('arrow', { enabled: hasPrev })}>
                        <Icon onClick={() => hasPrev && pageNumber.dec()} type="arrow-thin-left" />
                    </span>
                    <span className={classNames('arrow', { enabled: hasNext })}>
                        <Icon onClick={() => hasNext && pageNumber.inc()} type="arrow-thin-right" />
                    </span>
                </div>
            </div>
            <div className={classNames('content')}>
                {children}
            </div>
        </div>
    );
};

Slider.propTypes = {
    pageNumber: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    totalCount: PropTypes.number
};

export default Slider;
