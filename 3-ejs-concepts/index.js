import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(__dirname);

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

const users = [
  { id: 1, name: "Carthick" },
  { id: 2, name: "Acubee" },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
