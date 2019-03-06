const assert = require('lib/assert');
const Textile = require('models/textile');

module.exports = {

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
