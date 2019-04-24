import React from 'react';
import PropTypes from 'prop-types';

import Select from '../../common.components/select';
import Spin from '../../common.components/spin';

import './offices.css';

class Offices extends React.Component {
    componentDidMount() {
        const { inprogress, list, fetchOffices } = this.props;

        if (list.length === 0 && !inprogress) {
            fetchOffices();
        }
    }

    render() {
        const { inprogress, list, value } = this.props;

        return inprogress ? (
            <Spin progress size="m" />
        ) : (
            <Select
                size="m"
                text="vary"
                type="radio"
                items={list.map(item => ({
                    val: item.id,
                    text: item.name.ru
                }))}
                val={value || ''}
                width="max"
                onChange={this._onChange}
            />
        );
    }

    _onChange = ([value]) => {
        const { onChange } = this.props;

        onChange(value);
    }

    static PropTypes = {
        inprogress: PropTypes.bool.isRequired,
        list: PropTypes.array.isRequired,
        value: PropTypes.string.isRequired,
        fetchOffices: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired
    }
}

export default Offices;
