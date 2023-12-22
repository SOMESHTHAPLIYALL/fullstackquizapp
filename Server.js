const express = require("express");
const connectDB = require("./backend/config/db");
const quizRoutes = require("./backend/routes/quizRoutes");
const questionRoutes = require("./backend/routes/questionsRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
connectDB();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1/quizzes", quizRoutes);
app.use("/api/v1/questions", questionRoutes);

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

app.listen(8080, () => {
  console.log("Server Working");
});
