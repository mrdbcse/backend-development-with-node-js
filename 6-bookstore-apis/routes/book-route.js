const express = require("express");
const {
  getAllBooks,
  getBookById,
  addNewBookDetails,
  updateBookDetails,
  deleteBookDetails,
} = require("../controllers/book-controller");

const router = express.Router();

router.get("/all-books-details", getAllBooks);
router.get("/book-by-id/:id", getBookById);
router.post("/add-new-book", addNewBookDetails);
router.put("/update-book-details/:id", updateBookDetails);
router.delete("/delete-book-details/:id", deleteBookDetails);

module.exports = router;
