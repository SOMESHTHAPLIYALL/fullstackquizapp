const express = require("express");
const router = express.Router();

const quizController = require("../controller/quizController");

router.post("/createQuiz", quizController.createQuiz);
router.get("/getallquiz", quizController.getAllQuiz);
router.get("/:quizId", quizController.getQuiz);
router.post("/deleteQuiz/:id", quizController.deleteQuiz);

module.exports = router;
