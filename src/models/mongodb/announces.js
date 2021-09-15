const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let announceSchema = new Schema({
      userId: { type: Number, required: true },
      description: { type: String, required: true },
      category: { type: String, required: true },
      status: { type: Number, required: true }
});

let announceModel = mongoose.model("Announce", announceSchema);

module.exports = announceModel;