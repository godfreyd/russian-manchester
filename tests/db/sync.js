const db = require('db');

(async () => {
    await db.sequelize.sync({ force: true });
    await db.sequelize.close();
})();
