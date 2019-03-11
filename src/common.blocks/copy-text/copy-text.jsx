import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Link from '@material-ui/core/Link';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import './copy-text.css';

const classNames = cn('copy-text');

class CopyText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: console.log('copy')
        };
    }

    /**
     * Устанавливает текст для отображения
     * @param {String} i18nKey
     * @private
     */
    _setText = i18nKey => {
        this.setState({
            text: console.log(i18nKey)
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
}

CopyText.propTypes = {
    name: PropTypes.string
};

export default CopyText;
