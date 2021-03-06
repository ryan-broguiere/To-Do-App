const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: "./db.env" });
//const serverless = require('serverless-http');
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
app.use(require("./routes"));

app.get("/", (req, res) => {
    res.send("this is a response");
});

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully to MongoDB");
});

app.listen(port, () => console.log(`Server running on Localhost:${port}`));
