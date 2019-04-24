import React from 'react';
import propTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Link from '../../../common.components/link';
import Tooltip from '../../../common.components/tooltip';
import Button from '../../../common.components/button';

import CubeCard from '../cube-card';
import CubeStatus from '../cube-status';

import i18n from '../../i18n';

const classNames = cn('cube-tooltip');

import './cube-tooltip.css';

export default class CubeTooltip extends React.Component {
    state = {
        copyText: i18n('copy'),
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

                    <div className={classNames('title')}>{i18n('products-place')}</div>

                    <div className={classNames('description')}>
                        <Link url={cube.link}>{description || ''}</Link>
                    </div>

                    {isAdmin &&
                        <div
                            className={classNames('fqdn-block')}
                            onMouseOut={() => this.setState({ copyText: i18n('copy') })}
                        >
                            <div className={classNames('title')}>{i18n('fqdn')}</div>
                            <div className={classNames('fqdn')}>{fqdn}</div>
                            <CopyToClipboard
                                text={fqdn}
                                onCopy={() => this.setState({ copyText: i18n('copied') })}
                            >
                                <div className={classNames('copy-link')}>{copyText}</div>
                            </CopyToClipboard>
                        </div>
                    }

                    <div className={classNames('status-block')}>
                        <div className={classNames('title')}>{i18n('status', 'cube')}</div>
                        <CubeStatus cube={cube} />
                    </div>

                    {isAdmin &&
                        <div className={classNames('controls')}>
                            <Button action onClick={() => this.setState({ modalVisible: true })}>
                                {i18n('manage', 'cube')}
                            </Button>
                        </div>
                    }

                    {modalVisible && <CubeCard cube={cube} onClose={this._closeModal} />}

                </div>
            </Tooltip>
        );
    }

    static propTypes = {
        cube: propTypes.object.isRequired,
        isAdmin: propTypes.bool
    }
}
