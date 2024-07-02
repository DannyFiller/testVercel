const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");


const PhanLoai = require("./router/PhanLoai");
// const plHoatDongRoute = require("./router/PLHoatDong");
// const quanAoRoute = require("./router/QuanAo");




dotenv.config();
// Kết nối CSDL
async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected");
  } catch (err) {
    console.log("Lỗi kết nối CSDL", err);
  }
}
ConnectDB();

app.use(bodyParser.json({limit:"50mb"})); 
app.use(cors());
app.use(morgan("common"));

// Routes
app.use("/phanLoai",PhanLoai);
// app.use("/plHoatDong",plHoatDongRoute);
// app.use("/quanAo",quanAoRoute);


app.get("/",(req,res) => {
  res.status(200).json("hello");
});

//
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
