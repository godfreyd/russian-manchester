const express = require('express');

const indexController = require('./controllers/index');

const router = express.Router();

router.get('/', indexController);
router.get('/admin', indexController);
router.get('/search', indexController);

router.get('*', (req, res, next) => {
    res.status(404);

    return indexController(req, res, next);
});

module.exports = router;
