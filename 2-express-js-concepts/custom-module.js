import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => res.send("Home Page"));
app.post("/api/data", (req, res) =>
  res.json({ message: "Data received", data: req.data })
);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something went wrong!!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
