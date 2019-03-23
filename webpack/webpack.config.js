const env = (process.env.NODE_ENV) ? process.env.NODE_ENV : process.env.WEBPACK_MODE;

console.log(`Reactive-Stub is building for ${env}`);

module.exports = [
    require('./client.config'),
    require('./server.config')
];
