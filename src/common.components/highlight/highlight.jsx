import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import Highlighter from 'react-highlight-words';

import './highlight.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('highlight');

const Highlight = ({ type = 'default', word, text }) => {
    const searchWords = text.split(' ').concat(text);

    return (
        <Highlighter
            autoEscape
            highlightClassName={classNames({ type })}
            searchWords={searchWords}
            textToHighlight={word}
        />
    );
};

Highlight.propTypes = {
    type: propTypes.string,
    text: propTypes.string.isRequired,
    word: propTypes.string.isRequired
};

export default Highlight;
