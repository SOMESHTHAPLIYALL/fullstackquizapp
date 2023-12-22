const Quiz = require("../models/quizModel");

exports.createQuiz = async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    res.status(200).send({
      message: "Quiz created sucessfully",
      success: true,
      newQuiz,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in creating quiz",
      success: false,
      error,
    });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    console.log(req.params.quizId);
    const quiz = await Quiz.findById(req.params.quizId).populate("questions");
    res.status(200).send({
      message: "Quiz fetched succesfully",
      success: true,
      quiz,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error in getting quiz",
      success: false,
      error,
    });
  }
};

exports.getAllQuiz = async (req, res) => {
  try {
    const allquiz = await Quiz.find().populate("questions");
    res.status(200).send({
      message: "Quiz fetched successfully",
      success: true,
      allquiz,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error getting quizes",
      success: false,
      error,
    });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      message: "Quiz deleted succesfully",
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
