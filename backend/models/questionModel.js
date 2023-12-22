const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  OptionA: {
    type: String,
    required: true,
  },
  OptionB: {
    type: String,
    required: true,
  },
  OptionC: {
    type: String,
    required: true,
  },
  OptionD: {
    type: String,
    required: true,
  },
  ans: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
