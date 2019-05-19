const assert = require('http-assert-value');
const env = process.env.NODE_ENV || 'development';
const config = require('configs-overload')('./configs', { env: env });

const assertBySchema = assert.bySchema;

assert.bySchema = (value, schemaName) => {
    const schema = require(`lib/schema/${schemaName}`);

    assertBySchema(value, schema, config.schemaValidator);
};

assert.categoryName = value => {
    const isValid = /^[0-9a-zA-Zа-яА-Я\s-]+$/.test(value);

    assert(isValid, 'Tesseract name is invalid', 400, 'NII', { value });
};

assert.categoryIdentity = value => {
    const isValid = /^[\w-]+$/.test(value);

    assert(isValid, 'Tesseract identity is invalid', 400, 'III', { value });
};

module.exports = assert;
