import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Input from '../../common.blocks/input';
import Button from '../../common.blocks/button';

const classNames = cn('product-card');

class NewProduct extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            brand: ''
        };

    }

    /**
     * Обработчик ввода в поля формы
     *
     * @param {String} name
     * @param {String} value
     * @returns {void}
     * @private
     */
    _handleInputChange = (name, value) => {
        const { onInputChange} = this.props;

        if (onInputChange) {
            onInputChange(value.trim());
        }

        this.setState({
            [name]: value
        });
    }

    render() {
        const { id = '', brand = '' } = this.state;

        return (
            <div className={classNames()}>
                <div className={classNames('content')}>
                <form>
                    <label>
                        ID:

                        <Input
                        theme="normal"
                        name="id"
                        text={id}
                        autocomplete={false}
                        size="m"
                        hasClear
                        placeholder='ID'
                        pin="round-round"
                        onChange={value => this._handleInputChange('id', value)}
                    />
                    </label>

                    <label>
                    BRAND:

                    <Input
                    theme="normal"
                    name="id"
                    text={brand}
                    autocomplete={false}
                    size="m"
                    hasClear
                    placeholder='Бренд'
                    pin="round-round"
                    onChange={value => this._handleInputChange('brand', value)}
                />
                </label>


                    <Button theme="normal" size="m" action type="submit">
                    Сохранить
                    </Button>
                </form>

                </div>
            </div>
        );
    }

    static propTypes = {
        onInputChange: PropTypes.func
    }

}

export default NewProduct;
