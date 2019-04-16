import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import Highlighter from 'react-highlight-words';

import './highlight.css';

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

Highlight.PropTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired
};

export default Highlight;
