const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  caseId: { type: mongoose.Schema.Types.ObjectId, ref: "errand" },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
