//const mongoHelper = require("@condor-labs/mongodb")();
//const mongoose = mongoHelper.mongoose;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
      announceStatus: { type: Number, required: true }
    }],
});

let userModel = mongoose.model("User", userSchema); // then I am able to create a my model based on the connection object that I got using my helper

module.exports = userModel;