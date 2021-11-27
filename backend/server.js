const cors = require("cors");
const express = require('express');
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "./db.env" })
const serverless = require('serverless-http');

app.use(express.json())
app.use(cors())
app.use(require("./routes"))

app.get('/', (req,res) => {
    response.send('this is a response')    
})


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", CLIENT_ORIGIN);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
//   res.header("Access-Control-Allow-Credentials", true);
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(204);
//   }
//   next();
// });

mongoose.connect(process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to MongoDB");
});


app.listen(process.env.PORT, () => console.log(`Server running on Localhost:${process.env.PORT}`))