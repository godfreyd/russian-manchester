import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import omit from 'lodash/omit';

import Button from '../../common.blocks/button';

const classNames = cn('device-button');

const ownProps = ['i18nKey'];

const DeviceButton = props => {
    const { i18nKey } = props;
    const buttonProps = omit(props, ownProps);

    return (
        <div className={classNames()}>
            <Button width="max" {...buttonProps}>
                {console.log(i18nKey, 'device') || ''}
            </Button>
        </div>
    );
};

DeviceButton.propTypes = {
    i18nKey: PropTypes.string
};

export default DeviceButton;
