const Question = require("../models/questionModel");
const Quiz = require("../models/quizModel");

exports.createQuestion = async (req, res) => {
  try {
    const { text, OptionA, OptionB, OptionC, OptionD, ans, id_quiz } = req.body;
    console.log(text);
    console.log(req.body);
    const question = new Question(req.body);

    await question.save();
    const quiz = await Quiz.findById(id_quiz);
    quiz.questions.push(question._id);
    await quiz.save();
    res.status(200).send({
      message: "Succesfully created",
      success: true,
      question,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error creating question",
      success: false,
      error,
    });
  }
};
exports.deleteQues = async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      message: "Question deleted succesfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while deleting",
      success: false,
      error,
    });
  }
};
