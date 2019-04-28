import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Link from '../../common.components/link';

import Product from '../user-products/__product';

import i18n from '../i18n';

import './my-products__list.css';

const classNames = cn('my-products-list');

const MyProductsList = ({ products }) => {
    const { links: { faqPage } } = globalConfig;

    return (
        <div className={classNames()}>

            <ReactCSSTransitionGroup
                transitionName="list"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
            >
                {products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                    />
                ))}
            </ReactCSSTransitionGroup>

            <div className={classNames('tip')}>
                <Link url={faqPage}>{i18n('my-products-tip')}</Link>
            </div>

        </div>
    );
};

MyProductsList.propTypes = {
    products: PropTypes.array.isRequired
};

export default MyProductsList;
