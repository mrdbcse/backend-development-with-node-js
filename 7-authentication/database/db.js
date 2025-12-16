const mongoose = require("mongoose");

const connectMongoDB = async (mongodbURI) => {
  try {
    await mongoose.connect(mongodbURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
