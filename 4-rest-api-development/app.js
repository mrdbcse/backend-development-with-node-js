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

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
