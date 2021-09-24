//const mongoHelper = require("@condor-labs/mongodb")();
//const mongoose = mongoHelper.mongoose;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;