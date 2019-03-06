const assert = require('http-assert-value');
const env = process.env.NODE_ENV || 'development';
const config = require('configs-overload')('./configs', { env: env });

const assertBySchema = assert.bySchema;

assert.bySchema = (value, schemaName) => {
    const schema = require(`lib/schema/${schemaName}`);

    assertBySchema(value, schema, config.schemaValidator);
};

module.exports = assert;
