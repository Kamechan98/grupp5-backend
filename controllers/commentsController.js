const router = require("express").Router();
const { addComment } = require("../models/commentsModel");

router.post("/", addComment);

module.exports = router;
