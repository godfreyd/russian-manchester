module.exports = sequelize => ({
    textile: sequelize.import('textile'),
    textileGood: sequelize.import('textileGood'),
    event: sequelize.import('event'),
    // role: sequelize.import('role')
});
