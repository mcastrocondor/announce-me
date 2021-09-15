const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let announceSchema = new Schema({
      userId: { type: String, required: true },
      description: { type: String, required: true, unique: true },
      category: { type: String, required: true },
      status: { type: Number, required: true }
});

let announceModel = mongoose.model("Announce", announceSchema);

module.exports = announceModel;