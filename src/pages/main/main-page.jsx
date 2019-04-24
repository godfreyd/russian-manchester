import React from 'react';
import { cn } from '@bem-react/classname';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import AppNEW from '../../AppNew';

import pageTemplate from '../../decorators/page-template';

import Filter from '../../components/filter';
import Products from '../../components/products';

import './main-page.css';

const classNames = cn('main-page');
const HAS_SEARCH = true;

const enhance = compose(
    pageTemplate(HAS_SEARCH)
);

class MainPage extends React.Component {

    render() {
        return (
            <div className={classNames()}>
                <div className={classNames('content')}>
                <Filter />
                </div>
            </div>
        );
    }
}

const WrappedComponent = withRouter(MainPage);


export default enhance(WrappedComponent);
