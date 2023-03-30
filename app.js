const express = require("express");
const app = express();
const cors = require("cors");
const Status = require("./schemas/statusSchema");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/errands", require("./controllers/errandsController"));
app.use("/api/comments", require("./controllers/commentsController"));

app.get("/api/status", async (req, res) => {
  const statuses = await Status.find();
  res.json(statuses);
});

module.exports = app;
