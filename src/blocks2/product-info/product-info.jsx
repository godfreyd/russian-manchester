import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import ProductInfoRow from '../product-info-row';
import ProductForm from '../../common.blocks2/product-form';

import Input from '../../common.blocks/input';
import Textarea from '../../common.blocks/textarea';
import Button from '../../common.blocks/button';

import './product-info.css';

const classNames = cn('product-info');

class ProductInfo extends React.Component {

    render() {
        const  { productInfo = {}, onSaveInfo, onInputChange } = this.props;

        return (
            <ProductForm onSubmit={onSaveInfo}>
                <div className={classNames()}>
                    <div className={classNames('group')}>
                        <ProductInfoRow infoKey='ID'>
                            <Input
                            theme="normal"
                            name="id"
                            text={productInfo.id}
                            autocomplete={false}
                            size="m"
                            hasClear
                            placeholder='ID'
                            pin="round-round"
                            onChange={value => onInputChange('id', value)}
                            />
                        </ProductInfoRow>
                    </div>

                    <div className={classNames('group')}>
                        <ProductInfoRow infoKey='Бренд'>
                            <Input
                            theme="normal"
                            name="id"
                            text={productInfo.brand}
                            autocomplete={false}
                            size="m"
                            hasClear
                            placeholder='Бренд'
                            pin="round-round"
                            onChange={value => onInputChange('brand', value)}
                            />
                        </ProductInfoRow>
                    </div>

                    <div className={classNames('group', { type: 'note' })}>
                        <ProductInfoRow infoKey='Описание'>
                            <Textarea
                                size="m"
                                hasClear
                                cls={classNames('note')}
                                text={productInfo.note}
                                onChange={value => onInputChange('note', value)}
                            />
                        </ProductInfoRow>
                    </div>

                    <div className={classNames('group', { type: 'buttons' })}>
                        <Button theme="normal" size="m" action type="submit" >
                        Сохранить
                        </Button>
                    </div>
                </div>
            </ProductForm>
        );
    }

    static propTypes = {
        productInfo: PropTypes.object,
        onSaveInfo: PropTypes.func,
        onInputChange: PropTypes.func
    }
};

export default ProductInfo;


