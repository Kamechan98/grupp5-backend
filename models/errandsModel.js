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

// exports.updateStatusById = (req, res) => {

//   const { status } = req.body
exports.updateStatusById = async (req, res) => {
  const id = req.params.id;
  const { statusId } = req.body;

  if (statusId == "1") {
    const newErrand = await errand.findByIdAndUpdate(
      id,
      { status: { statusId: 1, statusName: "Ej Påbörjad" } },
      { new: true }
    );

    res.status(201).json(newErrand);
  }

//   errand.findByIdAndUpdate(req.params.id, { status }, { new: true })
//     .then(data => {
//       res.status(200).json(data)
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: 'Could not find and update errand',
//         err: err.message
//       })
//     })
// }

exports.updateStatusById = async (req, res) => {
    const id = req.params.id;
    const { statusId } = req.body;
  
    if (statusId == "1") {
      const newErrand = await errand.findByIdAndUpdate(
        id,
        { status: { statusId: 1, statusName: "Ej Påbörjad" } },
        { new: true }
      );
  
      res.status(201).json(newErrand);
    }
  
    if (statusId == "2") {
      const newErrand = await errand.findByIdAndUpdate(
        id,
        { status: { statusId: 2, statusName: "Pågående" } },
        { new: true }
      );
      res.status(201).json(newErrand);
    }
  
    if (statusId == "3") {
      const newErrand = await errand.findByIdAndUpdate(
        id,
        { status: { statusId: 3, statusName: "Avklarad" } },
        { new: true }
      );
      res.status(201).json(newErrand);
    }
  };
  if (statusId == "2") {
    const newErrand = await errand.findByIdAndUpdate(
      id,
      { status: { statusId: 2, statusName: "Pågående" } },
      { new: true }
    );
    res.status(201).json(newErrand);
  }

  if (statusId == "3") {
    const newErrand = await errand.findByIdAndUpdate(
      id,
      { status: { statusId: 3, statusName: "Avklarad" } },
      { new: true }
    );
    res.status(201).json(newErrand);
  }
};
