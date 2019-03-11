import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

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
                {showAll ? 'Свернуть' : 'Все города'}
            </div>
        }
    </div>
);

TesseractFilter.propTypes = {
    children: PropTypes.node,
    toggleMore: PropTypes.func.isRequired,
    showAll: PropTypes.bool.isRequired,
    showButton: PropTypes.bool.isRequired
};

export default TesseractFilter;
