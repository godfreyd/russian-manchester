const _ = require('lodash');

const getMaterial = data => _(data).split(' ').first();

const getDate = data => {
    const date = new Date(data);

    return Number.isNaN(date.valueOf()) ? null : date;
};

module.exports = {
    material: [
        {
            features: 'Общие характеристики',
            value: 'Материал',
            prepare: getMaterial
        },
        {
            features: 'Материал',
            value: 'Материал',
            prepare: getMaterial
        }
    ],
    price: [
        {
            features: 'Стоимость',
            value: 'Цена',
            prepare: data => parseInt(data, 10)
        },
        {
            features: 'Стоимость',
            value: 'Цена',
            // @example: '500 ₽'
            prepare: data => {
                const [price] = _.split(data, ' ₽');

                return parseInt(price, 10);
            }
        }
    ],
    updatedAt: [
        {
            features: 'Дополнительная информация',
            value: 'Дата последнего обновления цены',
            prepare: getDate
        },
        {
            features: 'Дополнительная информация',
            value: 'Время последнего обновления цены',
            prepare: getDate
        }
    ],
    height: [
        {
            features: 'Размер',
            value: 'Размер изображения',
            // @example:  '200 x 210'
            prepare: data => {
                const [height] = _.split(data, ' x ');

                return parseInt(height, 10);
            }
        },
        {
            features: 'Размер',
            value: 'Размер',
            // @example: '200 x 210'
            prepare: data => {
                const [, size] = _.split(data, ' ');
                const [height] = _.split(size, ' x ');

                return parseInt(height, 10);
            }
        }
    ],
    width: [
        {
            features: 'Размер',
            value: 'Размер изображения',
            // @example: '200 x 210'
            prepare: data => {
                const [, width] = _.split(data, ' x ');

                return parseInt(width, 10);
            }
        },
        {
            features: 'Размер',
            value: 'Размер',
            // @example: '7.9", 1024x768'
            prepare: data => {
                const [, width] = _.split(data, ' x ');

                return parseInt(width, 10);
            }
        }

    ]
};
