const mongodb = require("@condor-labs/mongodb")();
const helperMongo = require("./mongoHelper");
const Schema = mongodb.mongoose.Schema;

let userSchema = new Schema({
  id: Number,  
  name: String,
  token: String,
  password: String,
  announces: [ 
      {
      announceId: { type: Number, required: true },
      announceDescription: { type: String, required: true },
      announceCategory: { type: String, required: true },
      announceStatus: { type: Number, required: true },
      announceData: { type: Data, required: true }
    }],
});

const dbConnection = helperMongo.clients["connection_mongo_1"]; // I got the name of the connection from mongoDbSettings
let userModel = dbConnection.model("User", userSchema); // then I am able to create a my model based on the connection object that I got using my helper

module.exports = userModel;