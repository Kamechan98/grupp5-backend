const router = require("express").Router();
const Comment = require("../../models/Comment");

router.post("/", async (req, res) => {
  const { caseId, email, body } = req.body;
});
