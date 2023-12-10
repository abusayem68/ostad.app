const express = require('express');
const app = express();
const { dbConnection } = require('./src/configuration/config');

// security
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const { rateLimit } = require('express-rate-limit');
const router = require('./src/routes/api');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
});

// middlewares
app.use(helmet());
app.use(cors());
app.use(hpp());
app.use(limiter);
app.use(mongoSanitize());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

// Connect to the database
dbConnection();

// route implement
app.use('/api/v1', router);

// undefined route handler
app.use('*', (req, res) => {
  res.status(404).json({ status: 'failed', data: 'Not found!' });
});

module.exports = app;
