module.exports.index = function(req, res) {
    res.send('Server running');
};

module.exports.users = function(req, res) {
    res.json([
        { id: 1, username: 'Sergey Bocharov'},
        { id: 2, username: 'Alla Bocharova'}
      ]);
};
