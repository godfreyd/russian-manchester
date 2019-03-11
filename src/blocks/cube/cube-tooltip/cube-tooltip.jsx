import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Link from '../../../common.blocks/link';
import Tooltip from '../../../common.blocks/tooltip';
import Button from '../../../common.blocks/button';
import CubeCard from '../cube-card';
import CubeStatus from '../cube-status';
import './cube-tooltip.css';

const classNames = cn('cube-tooltip');

export default class CubeTooltip extends React.Component {
    state = {
        copyText: console.log('copy'),
        modalVisible: false
    }

    _closeModal = () => this.setState({ modalVisible: false })

    render() {
        const { cube, isAdmin } = this.props;
        const { copyText, modalVisible } = this.state;
        const { fqdn, description } = cube;

        return (
            <Tooltip type={classNames()}>
                <div className={classNames()}>

                    <div className={classNames('title')}>{console.log('devices-place')}</div>

                    <div className={classNames('description')}>
                        <Link url={cube.link}>{description || ''}</Link>
                    </div>

                    {isAdmin &&
                        <div
                            className={classNames('fqdn-block')}
                            onMouseOut={() => this.setState({ copyText: console.log('copy') })}
                        >
                            <div className={classNames('title')}>{console.log('fqdn')}</div>
                            <div className={classNames('fqdn')}>{fqdn}</div>
                            <CopyToClipboard
                                text={fqdn}
                                onCopy={() => this.setState({ copyText: console.log('copied') })}
                            >
                                <div className={classNames('copy-link')}>{copyText}</div>
                            </CopyToClipboard>
                        </div>
                    }

                    <div className={classNames('status-block')}>
                        <div className={classNames('title')}>{console.log('status', 'cube')}</div>
                        <CubeStatus cube={cube} />
                    </div>

                    {isAdmin &&
                        <div className={classNames('controls')}>
                            <Button action onClick={() => this.setState({ modalVisible: true })}>
                                {console.log('manage', 'cube')}
                            </Button>
                        </div>

                    }

                    {modalVisible && <CubeCard cube={cube} onClose={this._closeModal} />}

                </div>
            </Tooltip>
        );
    }

    static propTypes = {
        cube: PropTypes.object.isRequired,
        isAdmin: PropTypes.bool
    }
}
