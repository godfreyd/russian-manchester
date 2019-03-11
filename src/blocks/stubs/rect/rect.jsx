import React from 'react';
import { cn } from '@bem-react/classname';

import './rect.css';

const classNames = cn('rect');

const Rect = ({ type = 'default', width, height }) => (
    <div style={{ width, height }} className={classNames({ type })} />
);

export default Rect;
