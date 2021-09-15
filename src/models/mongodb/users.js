//const mongoHelper = require("@condor-labs/mongodb")();
//const mongoose = mongoHelper.mongoose;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  token: String,
  password: { type: String, required: true },
  announces: [ 
      {
      announceId: { type: Number, required: false },
      announceDescription: { type: String, required: false },
      announceCategory: { type: String, required: false },
      announceStatus: { type: Number, required: false }
    }],
});

let userModel = mongoose.model("User", userSchema); // then I am able to create a my model based on the connection object that I got using my helper

module.exports = userModel;