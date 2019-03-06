const env = process.env.NODE_ENV || 'development';
const config = require('configs-overload')('./configs', { env: env });
const url = require('url');
const chalk = require('chalk');
const winston = require('winston');
const { createLogger, format, transports } = winston;
const { maskProps } = require('lib/maskHelper');

const logger = createLogger({
    silent: config.isDisabledDetailedLogging ? true : false,
    format: format.combine(
        format.colorize(),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.simple()
        // format.json() TODO: раскомментировать для production
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'combined.log' })
    ]
});

// TODO: раскомментировать для production
// if (process.env.NODE_ENV !== 'production') {
//     logger.add(new transports.Console({
//       format: format.simple()
//     }));
// }

module.exports = logger;

module.exports.requestLogger = function requestLogger(req, res, uid) {

  const reqHeaders = req.headers;
  const reqProtocol = req.protocol;
  const reqHost = req.hostname;
  const reqQuery = req.query;
  const reqMethod = `[${req.method}]`;

  const processedUrl = {
      protocol: reqProtocol.toUpperCase(),
      host: reqHost,
      pathname: reqQuery.hasOwnProperty('user') ? 'XXXXX' : reqQuery,
      query: maskProps(reqQuery, ['login', 'id'])
  };

  const { protocol, host, pathname, query } = processedUrl;

  const reqOpts = {
      host,
      pathname,
      query,
      headers: maskProps(reqHeaders, ['cookie', 'x-original-url'])
  };

  logger.info(`${chalk.yellow(reqMethod)} ${url.format(processedUrl)}`, { protocol, ...reqOpts, uid });
};
