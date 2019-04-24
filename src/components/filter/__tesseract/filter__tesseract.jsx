import React from 'react';
import propTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import i18n from '../../i18n';

const classNames = cn('filter');

const TesseractFilter = ({ children, toggleMore, showAll, showButton }) => (
    <div className={classNames('tesseract')}>

        <div className={classNames('area')}>
            {children}
        </div>

        {showButton &&
            <div
                className={classNames('tesseract-more-btn')}
                onClick={toggleMore}
            >
                {i18n(`filter-${showAll ? 'hide' : 'show'}`)}
            </div>
        }
    </div>
);

TesseractFilter.propTypes = {
    children: propTypes.node,
    toggleMore: propTypes.func.isRequired,
    showAll: propTypes.bool.isRequired,
    showButton: propTypes.bool.isRequired
};

export default TesseractFilter;
