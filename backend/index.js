const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/book-routes");
const cors = require("cors");

//MiddleWare
app.use(express.json());
app.use(cors());

app.use("/books", router); //localhost:5000/books

mongoose
  .connect("mongodb://localhost:27017/Book-Store")
  .then(() => {
    console.log("Connected to DataBase");
  })
  .catch((e) => {
    console.log("Connection Error due to :" + e);
  });
app.listen(5000);
