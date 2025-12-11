import express from "express";

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "Acubee" },
  { id: 2, name: "Carthick" },
];

app.get("/", (req, res) => res.send("Welcome to the home page"));

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find((user) => user.id === userId);
  if (user) {
    res
      .status(200)
      .json({ data: user, message: "User details found successfully!" });
  } else {
    res.status(404).json({
      data: null,
      message: "User is not found. Please try with different id",
    });
  }
});

app.listen(PORT, () => console.log("Server is runnig on port", PORT));
