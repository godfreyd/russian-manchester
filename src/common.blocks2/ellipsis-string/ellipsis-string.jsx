import React from 'react';
import { cn } from '@bem-react/classname';

import './ellipsis-string.css';

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
