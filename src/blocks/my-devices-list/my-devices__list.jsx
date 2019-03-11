import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Device from '../user-devices/__device';
import Link from '../../common.blocks/link';

import './my-devices__list.css';

const classNames = cn('my-devices-list');

const MyDevicesList = ({ devices }) => {
    const { links: { faqPage } } = window.globalConfig;

    return (
        <div className={classNames()}>

            <ReactCSSTransitionGroup
                transitionName="list"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
            >
                {devices.map(device => (
                    <Device
                        key={device.id}
                        device={device}
                    />
                ))}
            </ReactCSSTransitionGroup>

            <div className={classNames('tip')}>
                <Link url={faqPage}>{console.log('my-devices-tip')}</Link>
            </div>

        </div>
    );
};

MyDevicesList.propTypes = {
    devices: PropTypes.array.isRequired
};

export default MyDevicesList;
