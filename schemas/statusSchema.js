const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  _id: { type: Number },
  statusName: { type: String },
});

const Status = mongoose.model("status", statusSchema);

module.exports = Status;
