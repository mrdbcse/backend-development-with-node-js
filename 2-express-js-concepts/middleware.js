import express from "express";

const app = express();

const requestTimestampLogger = (req, res, next) => {
  const { url, method } = req;
  const timestamp = new Date().toISOString();

  console.log(`${timestamp} from ${method} to ${url}`);
  next();
};

app.use(requestTimestampLogger);

app.get("/", (req, res) => {
  console.log("Home Route");
  res.status(200).json({ data: "Home Page" });
});

app.get("/about", (req, res) => {
  console.log("About Page");
  res.status(200).json({ data: "About Page" });
});

app.listen(3000, () => console.log("server is running on port 3000"));
