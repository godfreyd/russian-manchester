const assert = require('lib/assert');
const Textile = require('models/textile');

module.exports = {

    findList: async (req, res) => {

        const materials = res.locals.queryHelper.getArray('materials');
        const colors = res.locals.queryHelper.getArray('colors');
        const brands = res.locals.queryHelper.getArray('brands');
        const categorias = res.locals.queryHelper.getArray('categorias');
        const sizes = res.locals.queryHelper.getArray('sizes');
        const { text, priceMin, priceMax } = req.query;
        const words = text && _.words(text, /\S+/g);

        _.each(categorias, item => assert.category(item));
        _.each(sizes, item => assert.size(item));
        _.each(brands, item => item && assert.identity(item, 'Brand name'));
        _.each(materials, item => assert.material(item));
        _.each(colors, item => assert.color(item));
        /* eslint-disable no-unused-expressions */
        _.isUndefined(priceMin) || assert.float(priceMin, 'Min price');
        _.isUndefined(priceMax) || assert.float(priceMax, 'Max price');
        /* eslint-enable no-unused-expressions */

        const filters = {
            categorias,
            materials,
            brands,
            priceMin,
            priceMax,
            sizes,
            words,
            colors
        };

        const devices = await Device.findList(filters, { words });

        const body = _(devices)
            .map(serializer('devicesItem'))
            .values();

        res.send(body);
    },

    save: async (req, res) => {
        const textileData = req.body;

        assert.bySchema(textileData, 'textile');

        // TODO: добавить проверку прав на редактирование и сохранение
        // await checkEditAccess(res.locals.user.login, textileData.id);

        const textile = new Textile(textileData);

        const body = await textile.save(res.locals.transaction);

        res.send(body);
    }


};
