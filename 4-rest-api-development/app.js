const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, name: "Joto kando Katmandu te" },
  { id: 2, name: "Gangtok e Gondogol" },
];

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to our bookstore API" });
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (book) {
    res.status(200).json({ message: "Book details found", data: book });
  } else {
    res.status(400).json({
      message: "Book not found. Try with different Book id",
      data: null,
    });
  }
});

app.post("/add", (req, res) => {
  const id = books.length + 1;
  const name = req.body.name;
  const newBook = { id, name };
  books.push(newBook);

  res
    .status(200)
    .json({ data: newBook, message: "New book added successfully!" });
});

app.put("/update/:id", (req, res) => {
  console.log("Params:", req.params);
  console.log("Body:", req.body);

  const bookId = parseInt(req.params.id);
  const bookTitle = req.body.name;

  const getCurrentBook = books.find((book) => book.id === bookId);

  if (getCurrentBook) {
    getCurrentBook.name = bookTitle || getCurrentBook.name;
    res.status(200).json({
      data: getCurrentBook,
      message: `Book with ${bookId} updated successfully!`,
    });
  } else {
    res.status(404).json({
      data: null,
      message: "Book not found. Try with a different book id",
    });
  }
});

app.delete("/delete/:id", (req, res) => {
  console.log("Params: ", req.params);
  console.log("Body: ", req.body);
  console.log(books);

  const bookId = parseInt(req.params.id);

  const indexOfCurrentBook = books.findIndex((book) => book.id === bookId);
  console.log("indexOfCurrentBook", indexOfCurrentBook);

  if (indexOfCurrentBook !== -1) {
    const deletedBook = books.splice(indexOfCurrentBook, 1);
    res
      .status(200)
      .json({ message: "Book deleted successfully!", data: deletedBook });
  } else {
    res.status(404).json({ message: "Book not found", data: null });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
