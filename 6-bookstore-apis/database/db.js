const mongoose = require("mongoose");

const connectMongoDB = async (MONGODB_URI) => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Unable to connect MongoDB: ${err}`);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
