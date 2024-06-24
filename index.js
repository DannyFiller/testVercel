const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
//
app.use(bodyParser.json({limit:"50mb"})); //chuyển sang dang json
app.use(cors());
app.use(morgan("common"));  // thông báo 

app.listen(9000, () => {
    console.log("Server is running");
});

app.get("/",(req,res) => {
  res.status(200).json("hello");
});