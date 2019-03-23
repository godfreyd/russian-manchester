import React from 'react';
import { cn } from '@bem-react/classname';
import { withRouter } from 'react-router-dom';

import ProductCard from '../../blocks2/product-card';

import pageTemplate from '../../decorators/page-template';

const classNames = cn('admin-page');

class AdminPage extends React.Component {

    render() {

        return (
            <div className={classNames()}>
                <div className={classNames('content')}>

                <ProductCard />

                </div>
            </div>
        );
    }
}

const WrappedComponent = withRouter(AdminPage);

export default pageTemplate()(WrappedComponent);
