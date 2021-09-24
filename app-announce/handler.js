'use strict';
const ServerlessHttp = require('serverless-http');
const app = require('../src/index');

const announceMe = ServerlessHttp(app);

const updateAnnounce = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const id = event.pathParameters.id;
  return
};

export { announceMe };
