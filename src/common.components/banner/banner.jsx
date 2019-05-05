import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import Icon from '../icon';

import './banner.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('banner');

class Banner extends React.Component {
    constructor(props) {
        super(props);

        const { localStorage, name } = props;

        const key = `${name}-hidden`;
        const isHidden = localStorage.getItem(key) === 'yes';

        this.state = { isHidden };
    }

    render() {
        const { title, children } = this.props;
        const { isHidden } = this.state;

        if (isHidden) {
            return null;
        }

        return (
            <div className={classNames()}>
                <div className={classNames('close')}>
                    <Icon type="close" onClick={this.close} />
                </div>
                {title && <h1 className={classNames('title')}>{title}</h1>}
                {children}
            </div>
        );
    }

    close = () => {
        const { localStorage, name } = this.props;

        localStorage.setItem(`${name}-hidden`, 'yes');

        this.setState({
            isHidden: true
        });
    }

    static propTypes = {
        title: PropTypes.string,
        name: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    }
}

export default Banner;
