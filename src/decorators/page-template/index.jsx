import React from 'react';
import { withNaming } from '@bem-react/classname';

import Header from '../../components/header';
import Footer from '../../components/footer';
import NotificationSystem from '../../components/notification-system';

import './page.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('page');

const PageTemplate = (withSearch = false) => ComposedComponent => props => (
    <div className={classNames()}>
        <Header withSearch={withSearch} />
        <main className={classNames('content')}>
            <ComposedComponent {...props} />
            <NotificationSystem />
        </main>
        <Footer />
    </div>
);

export default PageTemplate;
