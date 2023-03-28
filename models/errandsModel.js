const errand = require("../schemas/errandsSchema");

// CRUD

// Create
exports.createNewErrand = (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({
      message: "You have to enter something in all the fields",
    });
  }

  errand
    .create({ email, subject, message })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not create errand",
        err: err.message,
      });
    });
};

// READ

exports.getErrands = (req, res) => {
  errand
    .find()
    .populate("comments")
    .populate("status")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not find errand",
        err: err.message,
      });
    });
};

exports.getErrandById = (req, res) => {
  errand
    .findById(req.params.id)
    .populate("comments")
    .populate("status")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not find specific errand",
        err: err.message,
      });
    });
};

exports.updateStatusById = async (req, res) => {
  const id = req.params.id;
  const { statusId } = req.body;

  const newErrand = await errand.findByIdAndUpdate(
    id,
    {
      status: statusId,
    },
    { new: true }
  );
  await newErrand.populate("status");

  res.status(201).json(newErrand);
};
