const router = require("express").Router();
const Comment = require("../../models/Comment");
const Errand = require("../../models/Errand");

router.post("/", async (req, res) => {
  const { caseId, email, body } = req.body;
});
