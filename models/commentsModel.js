const Errand = require("../schemas/errandsSchema");
const Comment = require("../schemas/commentSchema");

exports.addComment = async (req, res) => {
  const { caseId, email, message } = req.body;

  const comment = Comment.create({ caseId, email, message });

  const errand = await Errand.findByIdAndUpdate(caseId, {
    $push: { comments: comment._id },
  });

  res.status(200).json(errand);
};
