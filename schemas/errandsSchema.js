const mongoose = require("mongoose");

const errandSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    // status: { type: Number, default: 1 },
    status: {
      statusId: { type: String, default: 1 },
      statusName: { type: String, default: 'Ej påbörjad' }
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
  },
  { timestamp: true }
);

module.exports = mongoose.model("Errand", errandSchema);
