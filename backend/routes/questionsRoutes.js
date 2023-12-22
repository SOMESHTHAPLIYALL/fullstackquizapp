const express = require("express");
const router = express.Router();
const questionController = require("../controller/questionController");

router.post("/createQues", questionController.createQuestion);
router.post("/deleteQues/:id", questionController.deleteQues);

module.exports = router;
