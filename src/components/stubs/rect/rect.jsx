import React from 'react';
import { withNaming } from '@bem-react/classname';

import './rect.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('rect');

const Rect = ({ type = 'default', width, height }) => (
    <div style={{ width, height }} className={classNames({ type })} />
);

export default Rect;
