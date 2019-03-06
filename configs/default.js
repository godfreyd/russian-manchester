/* eslint-disable camelcase */
const { sqlLogger } = require('logger');

module.exports = {

    db: {
        uri: process.env.POSTGRES_URI,
        options: {
            dialect: 'postgres',
            benchmark: true,
            pool: {
                max: 100,
                acquire: 1000
            },
            retry: {
                timeout: 5000,
                name: 'Query'
            },
            logging: sqlLogger
        }
    },

    cors: {
        origin: 'http://swagger.my-api.ru'
    },

    schemaValidator: {
        // Полный список параметров валидатора по схеме
        // https://github.com/epoberezkin/ajv#options
        allErrors: true,
        verbose: true
    }
}
