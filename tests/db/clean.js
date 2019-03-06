const logger = require('logger');

const db = require('db');

const cleanTables = async tables => {
    const destroyOperations = tables.map(table => db[table].destroy({ where: {} }));

    await Promise.all(destroyOperations);
};

module.exports = async () => {
    try {
        // await cleanTables([
        //     'staff',
        //     'event',
        //     'waitlist',
        //     'tesseractSlot',
        //     'role',
        //     'heartbeat'
        // ]);
        await cleanTables([
            // 'ticket',
            'textile'
            // 'location',
            // 'slotType',
            // 'tesseract'
        ]);
        await cleanTables([
            'textileGood'
            // 'tesseractGroup',
            // 'tesseractStatus',
            // 'office'
        ]);
    } catch (error) {
        logger.error(error);

        await db.sequelize.sync({ force: true });
    }
};
