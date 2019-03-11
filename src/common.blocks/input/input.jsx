import React from 'react';
import omit from 'lodash/omit';

import LegoInput from 'lego-on-react/src/components/textinput/textinput.react';

import 'lego-on-react/src/components/textinput/textinput.css';

import './input.css';

const ownProps = ['text'];

const Input = props => {
    const { text = '' } = props;
    const inputProps = omit(props, ownProps);

    return (
        <LegoInput
            theme="normal"
            view="default"
            tone="default"
            pin="round-round"
            hasClear
            autocomplete={false}
            text={text.toString()}
            {...inputProps}
        />
    );
};

export default Input;
