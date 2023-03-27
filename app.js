const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/errands", require("./controllers/errandsController"));
app.use("api/comments", require("./controllers/commentsController"));

module.exports = app;
