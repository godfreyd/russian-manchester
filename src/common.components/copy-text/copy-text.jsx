import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Link from 'lego-on-react/src/components/link/link.react';

import i18n from '../../components/i18n';

import './copy-text.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('copy-text');

class CopyText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: i18n('copy')
        };
    }

    /**
     * Устанавливает текст для отображения
     * @param {String} i18nKey
     * @private
     */
    _setText = i18nKey => {
        this.setState({
            text: i18n(i18nKey)
        });
    }

    /**
     * Устанавливает текст "Скопировать"
     * @private
     */
    _setCopy = () => {
        this._setText('copy');
    }

    /**
     * Устанавливает текст "Скопировано"
     * @private
     */
    _setCopied = () => {
        this._setText('copied');
    }

    render() {
        const { name = '' } = this.props;
        const { text = '' } = this.state;

        return (
            <div className={classNames()} onMouseOut={this._setCopy}>
                <p className={classNames('name')}>{name}</p>
                <CopyToClipboard text={name} onCopy={this._setCopied}>
                    <Link theme="normal" cls={classNames('copy')}>{text}</Link>
                </CopyToClipboard>
            </div>
        );
    }

    static propTypes = {
        name: PropTypes.string
    }
}

export default CopyText;
