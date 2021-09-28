
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logger = require('@condor-labs/logger');
const config = require('config');

const apiRoutes = require('./routes');

const app = express();
const db = config.get('mongoURI');
const port = process.env.PORT;
const BASE_PATH = '';

app.use(express.json());
app.use(BASE_PATH, apiRoutes);

mongoose
  .connect(db, {})
  .then(() => logger.log('MongoDB Connected...'))
  .catch(err => logger.err(err));

app.listen(port, () => {
  logger.log(`Server started on port: http://localhost:${port}`);
});


module.exports = app;
