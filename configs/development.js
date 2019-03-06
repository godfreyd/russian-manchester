module.exports = {
    isDisabledDetailedLogging: false,

    db: {
        uri: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_URI}:5432/${process.env.POSTGRES_DB}`,
        options: {
            logging: false
        }
    },

    cors: {
        origin: 'http://localhost:3001'
    },
};
