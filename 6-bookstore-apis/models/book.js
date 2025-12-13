const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxLength: [100, "Book title can't be more than 100 characters"],
  },
  author: { type: String, required: [true, "Author is required"], trim: true },
  year: {
    type: Number,
    required: [true, "Publication year is required"],
    validate: {
      validator: (value) => value <= new Date().getFullYear(),
      message: "Year can't be in future",
    },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Book", BookSchema);
