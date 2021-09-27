
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logger = require('@condor-labs/logger');
const config = require('config');

const userController = require('./controllers/userController');
const announceController = require('./controllers/announceController');
const middleware = require('./middleware');

const app = express();
const db = config.get('mongoURI');
const port = process.env.PORT;

app.use(express.json());

mongoose
  .connect(db, {})
  .then(() => logger.log('MongoDB Connected...'))
  .catch(err => logger.err(err));

app.listen(port, () => {
  logger.log(`Server started on port: http://localhost:${port}`);
});

app.post('/users', userController.createUser);

app.post('/users/auth', userController.authenticateUser);

app.post('/users/:id/announces', middleware.ensureAuthenticated, announceController.createAnnounce);

app.get('/users/:id/announces', middleware.ensureAuthenticated, announceController.getAnnouncesbyUserFilters);

app.get('/users/announces/:id', middleware.ensureAuthenticated, announceController.getAnnouncebyId);

app.get('/announces', middleware.ensureAuthenticated, announceController.getAnnouncesbyDescription);

app.delete('/users/:id/announces/:announceId', middleware.ensureAuthenticated, announceController.removeAnnounce);

app.patch('/users/:id/announces/:announceId', middleware.ensureAuthenticated, announceController.updateAnnounce);


module.exports = app;
