require("dotenv").config();
const express = require("express");
const connectMongoDB = require("./database/db");
const bookRoutes = require("./routes/book-route");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: true, message: "Welcome to bookstore APIs", data: null });
});

// connecting to MongoDB
connectMongoDB(process.env.MONGODB_URI);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
