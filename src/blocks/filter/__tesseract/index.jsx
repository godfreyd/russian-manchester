import { connect } from 'react-redux';
import groupBy from 'lodash/groupBy';
import partition from 'lodash/partition';
import { changeFilters } from '../../../redux/actions/filters';

import TesseractFilter from './filter-container';

export default connect(mapStateToProps, mapDispatchToProps)(TesseractFilter);

/*
   Инициализирует объекты домашних и недомашних офисов:
   {
        БЦ: [
            {
                ...cube,
                isChecked: true/false
            },
            ...
        },
        БЦ2: [
            ...
        ]
   }
 */
function mapStateToProps(state) {
    const { filters, filtersValue } = state.filters;

    const tesseractsValue = filtersValue.tesseracts;
    const values = tesseractsValue.map(cube => cube.tesseracts);

    const tesseracts = filters.tesseracts.map(tesseract => {
        tesseract.isChecked = values.includes(tesseract.id);

        return tesseract;
    });

    const [homeOffices, anotherOffices] = partition(tesseracts, 'office.isHome');

    return {
        homeOffices: groupBy(homeOffices, 'office.name'),
        anotherOffices: groupBy(anotherOffices, 'office.name')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterChange: (field, value) => dispatch(changeFilters({ field, value }))
    };
}
