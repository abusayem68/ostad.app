const express = require('express');
const app = express();
const { dbConnection } = require('./src/configuration/config');
const router = require('./src/routes/api');

const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const { rateLimit } = require('express-rate-limit');

app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(mongoSanitize());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
});
app.use(limiter);

// connect to the database
dbConnection();

// Router implement
app.use('api/v1', router);

// Undefined route handler
app.use('*', (req, res) => {
  res.status(404).json({ status: 'failed', data: 'Not found' });
});

module.exports = app;
