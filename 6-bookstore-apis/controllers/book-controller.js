const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({}).sort({ createdAt: -1 });
    console.log("Response: ", allBooks);

    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of all books fetched successfully",
        data: allBooks,
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "No books found", data: null });
    }
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
      data: null,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookById = await Book.findById(bookId);
    console.log("Response: ", bookById);

    if (bookById) {
      res.status(200).json({
        success: false,
        message: "Book details found successfully",
        data: bookById,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book details not found by id",
        data: null,
      });
    }
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
      data: null,
    });
  }
};

const addNewBookDetails = async (req, res) => {
  try {
    const payload = req.body;
    console.log("Payload: ", payload);

    const response = await Book.create(payload);
    console.log("Response: ", response);

    if (response) {
      res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: response,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Unable to add a new book",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
      data: null,
    });
  }
};
const updateBookDetails = async (req, res) => {
  try {
    const payload = req.body;
    const bookId = req.params.id;

    const response = await Book.findByIdAndUpdate(bookId, payload, {
      new: true,
    });
    console.log("Response: ", response);

    if (response) {
      res.status(200).json({
        status: true,
        message: "Book updated successfully",
        data: response,
      });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Book with id not found", data: null });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
      data: null,
    });
  }
};
const deleteBookDetails = async (req, res) => {
  try {
    const bookId = req.params.id;
    const response = await Book.findByIdAndDelete(bookId);

    console.log("Response: ", response);
    if (response) {
      res.status(200).json({
        status: true,
        message: "Book deleted successfully",
        data: response,
      });
    } else {
      res
        .staus(404)
        .json({ status: false, message: "Unable to delete book", data: null });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
      data: null,
    });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addNewBookDetails,
  updateBookDetails,
  deleteBookDetails,
};
