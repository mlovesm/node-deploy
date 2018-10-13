const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.json(),
    transports: [
        new transports.File({ filename: 'combind.log'}),
        new transports.File({ filename: 'error.log', level: 'error' }),   //error, warn, verbose, debug, silly
    ],
});

if (process.env.NODE_ENV !== 'production') {
    //json, label, timestamp, printf, simple, combine
    logger.add(new transports.Console({ format: format.simple() }));
}

module.exports = logger;
