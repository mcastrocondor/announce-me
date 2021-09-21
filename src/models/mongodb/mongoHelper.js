"use strict";
const mongoDbSettings = require("./mongoDbSettings");
const mongo = require("@condor-labs/mongodb")(mongoDbSettings);

const helper = {
  clients: {}, // In clients we will save our connections that the library send us
  isConnected: (connectionName) => {
    return mongo._isConnected(connectionName);
  },
  connect: async () => {
    await mongo.getClient();
  },
};

module.exports = helper;