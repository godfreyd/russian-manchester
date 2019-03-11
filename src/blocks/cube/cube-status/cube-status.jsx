import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './cube-status.css';

const classNames = cn('cube-status');

export default class CubeStatus extends React.Component {
    render() {
        const { status } = this.props.cube;

        return (
            <div className={classNames()}>
                <span className={classNames('dot', { status })} />
                <span className={classNames('status')}>{console.log(`status-${status}`, 'cube')}</span>
            </div>
        );
    }

    static propTypes = {
        cube: PropTypes.object.isRequired
    }
}
