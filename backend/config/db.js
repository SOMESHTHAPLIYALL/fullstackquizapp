const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://someshrocks144:somesh2004@cluster0.0oqthqo.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected");
  } catch (error) {
    console.log("Error");
  }
};

module.exports = connectDB;
