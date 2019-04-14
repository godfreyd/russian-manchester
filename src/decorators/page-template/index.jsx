import React from 'react';
import { cn } from '@bem-react/classname';
import Header from '../../blocks/header';

import './page.css';

const classNames = cn('page');

const PageTemplate = (withSearch = true) => ComposedComponent => props => (
    <div className={classNames()}>
        <Header withSearch={withSearch} />
        <main className={classNames('content')}>
            <ComposedComponent {...props} />
        </main>
    </div>
);

export default PageTemplate;
