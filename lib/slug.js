const slug = require('slug');

module.exports = name => slug(name, { mode: 'rfc3986' });
