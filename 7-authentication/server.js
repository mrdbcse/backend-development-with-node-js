require("dotenv").config();
const express = require("express");
const connectMongoDB = require("./database/db");
const authRoutes = require("./routes/auth-routes");

const app = express();
const PORT = process.env.PORT || 3000;

connectMongoDB(process.env.MONGODB_URI);

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is now listening on port: ${PORT}`));
