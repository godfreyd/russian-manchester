import React from 'react';
import { withNaming } from '@bem-react/classname';

import Rect from '../rect';

import './filter-stub.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('filter-stub');

/**
 * Возвращает заглушку вида фильтр
 *
 * @param {Number} key
 * @returns {ReactElement}
 */
function getFilter(key) {
    return (
        <div key={key} className={classNames('filter')}>
            <Rect width={125} height={10} />
            <Rect width={110} height={18} />
            <Rect width={160} height={18} />
            <Rect width={160} height={18} />
        </div>
    );
}

const FilterStub = () => (
    <div className={classNames()}>
        {Array.from(new Array(3), (_, index) => getFilter(index))}
    </div>
);

export default FilterStub;
