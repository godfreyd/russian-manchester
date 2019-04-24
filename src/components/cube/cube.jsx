import React from 'react';
import { cn } from '@bem-react/classname';
import propTypes from 'prop-types';
import find from 'lodash/find';
import get from 'lodash/get';

import Badge from '../../common.components/badge';
import Product from '../products/__product';
import Tooltip from './cube-tooltip';

import i18n from '../i18n';

import './cube.css';

const classNames = cn('cube');

const Cube = ({ openCard, products, title, tesseracts }) => {
    const isAdmin = get(products, '0.access.canEdit', false);
    const cubeId = get(products, '0.tesseract.id');
    const cubeName = get(products, '0.tesseract.name');
    const cube = find(tesseracts, ['id', cubeId]) || {};
    const { status, isInventorying, hasUndefinedEvents } = cube;
    const isUnavailableState = isInventorying || hasUndefinedEvents;
    const hasStatusBadge = Boolean(status) && status !== 'online';

    return (
        <div className={classNames()}>

            <div className={classNames('header')}>
                <div className={classNames('title')}>{title}</div>
                {cubeId && tesseracts &&
                    <Tooltip
                        cube={cube}
                        isAdmin={isAdmin}
                    />
                }
                {hasStatusBadge &&
                    <Badge type={status} text={i18n(`badge-${status}`, 'cube')} />
                }
                {!hasStatusBadge && isUnavailableState &&
                    <Badge type="unavailable" text={i18n(`badge-unavailable`, 'cube')} />
                }
            </div>

            <div className={classNames('products')}>
                {products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        cubeName={cubeName}
                        openCard={openCard}
                    />
                ))}
            </div>

        </div>
    );
};

Cube.propTypes = {
    openCard: propTypes.func.isRequired,
    products: propTypes.array.isRequired,
    title: propTypes.string.isRequired,
    tesseracts: propTypes.array
};

export default Cube;
