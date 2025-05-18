const config = require('./config.json');

// Override config values with environment variables if they exist
if (process.env.DB_HOST) config.database.host = process.env.DB_HOST;
if (process.env.DB_PORT) config.database.port = parseInt(process.env.DB_PORT);
if (process.env.DB_USER) config.database.user = process.env.DB_USER;
if (process.env.DB_PASSWORD) config.database.password = process.env.DB_PASSWORD;
if (process.env.DB_NAME) config.database.database = process.env.DB_NAME;
if (process.env.JWT_SECRET) config.secret = process.env.JWT_SECRET;
if (process.env.SMTP_HOST) config.smtpOptions.host = process.env.SMTP_HOST;
if (process.env.SMTP_PORT) config.smtpOptions.port = parseInt(process.env.SMTP_PORT);
if (process.env.SMTP_USER) config.smtpOptions.auth.user = process.env.SMTP_USER;
if (process.env.SMTP_PASS) config.smtpOptions.auth.pass = process.env.SMTP_PASS;

module.exports = config; 