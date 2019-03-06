const env = process.env.NODE_ENV || 'development';
const config = require('configs-overload')('./configs', { env: env });

const express = require('express');
const router = express.Router();
const asyncMiddleware = require('middlewares/asyncMiddleware');
const transaction = require('middlewares/transaction');
const textile = require('./textile');

module.exports = router
    .get('/', asyncMiddleware(async (req, res, next) => {
        await res.send('Hello World! I am a v1');
    }))
    .get('/ping/', asyncMiddleware(async (req, res, next) => {
        await res.status(200).send({message: 'OK'});
    }))
    .post('/textile/save', transaction, textile.save);

