const mongoose = require("mongoose");

const errandSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: Number, default: 1 },
  },
  { timestamp: true }
);

const Errand = mongoose.model("Errand", errandSchema);

module.exports = Errand;
