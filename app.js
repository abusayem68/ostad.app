const express = require('express');
const app = express();
const router = require('./src/Routes/api');
const cookieParser = require('cookie-parser');

// security middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });

app.use(express.json());
app.use(limiter);
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(cors());
app.use(router);

// Handle undefined route
app.use((req, res, next) => {
  res.status(404).json({ status: 'error', message: 'Route not found!' });
});
module.exports = app;
