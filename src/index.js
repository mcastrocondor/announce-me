
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logger = require('@condor-labs/logger');
const config = require('config');
const app = express();
const db = config.get('mongoURI');
const port = process.env.PORT;
const userController = require('./controllers/userController');
const AnnounceController = require('./controllers/announceController');

const middleware = require('./middleware');
//const mongoHelper = require("./src/models/mongodb/mongoHelper");

app.use(express.json());

mongoose
  .connect(db, {})
  .then(() => logger.log('MongoDB Connected...'))
  .catch(err => logger.err(err));

app.listen(port, () => {
  logger.log(`Server started on port: http://localhost:${port}`);
  // await  mongoHelper.connect();
});

app.post('/users', userController.createUser);

app.post('/users/auth', userController.authenticateUser);

app.post('/users/:id/announces', middleware.ensureAuthenticated, AnnounceController.createAnnounce);

app.get('/users/:id/announces', middleware.ensureAuthenticated, AnnounceController.getAnnouncesbyUser);

app.delete('/users/:id/announces/:announceId', middleware.ensureAuthenticated, AnnounceController.removeAnnounce);

app.patch('/users/:id/announces/:announceId', middleware.ensureAuthenticated, AnnounceController.updateAnnounce);


module.exports = app;
