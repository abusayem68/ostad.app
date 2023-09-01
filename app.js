// Applicatoin configuration
const express = require('express');
const app = express();
const router = require('./src/Routes/api');

app.use(express.json());
app.use(router);

module.exports = app;
