const Errand = require("../schemas/errandsSchema");
const Comment = require("../schemas/commentsSchema");

exports.addComment = async (req, res) => {
  const { caseId, email, message } = req.body;

  const comment = await Comment.create({ caseId, email, message });

  const errand = await Errand.findByIdAndUpdate(
    caseId,
    {
      $push: { comments: comment._id },
    },
    { new: true }
  );

  res.status(201).json(comment);
};
