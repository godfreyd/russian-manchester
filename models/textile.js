const db = require('db');

class Textile {
    constructor(data) {
        this._data = data;
    }

    async save(transaction) {
        return await db.textile.upsert(this._data, { transaction }).then(async (t) => {
            return await db.textile.findById(this._data.id, { t });
        });
    }
}

module.exports = Textile;
