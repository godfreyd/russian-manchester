import React from 'react';
import propTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import i18n from '../../i18n';

const classNames = cn('cube-status');

import './cube-status.css';

export default class CubeStatus extends React.Component {
    render() {
        const { status } = this.props.cube;

        return (
            <div className={classNames()}>
                <span className={classNames('dot', { status })} />
                <span className={classNames('status')}>{i18n(`status-${status}`, 'cube')}</span>
            </div>
        );
    }

    static propTypes = {
        cube: propTypes.object.isRequired
    }
}
