import React from 'react';
import { withNaming } from '@bem-react/classname';

import './ellipsis-string.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('ellipsis-string');

const EllipsisString = ({ children }) => {
    return (
        <div className={classNames()}>
            <div className={classNames('full')}>{children}</div>
            <div className={classNames('short')}>{children}</div>
        </div>
    );
};

export default EllipsisString;
