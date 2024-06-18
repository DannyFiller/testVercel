const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
//
const phanLoaiRoute = require("./router/phanLoai");
const plHoatDongRoute = require("./router/PLHoatDong");
const quanAoRoute = require("./router/QuanAo");

//
app.use(bodyParser.json({limit:"50mb"})); //chuyển sang dang json
app.use(cors());
app.use(morgan("common"));  // thông báo 

dotenv.config(); // có dòng này mới chạy dc process.env
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

// Routes
app.use("/phanLoai",phanLoaiRoute);
app.use("/plHoatDong",plHoatDongRoute);
app.use("/quanAo",quanAoRoute);

//
app.listen(process.env.PORT, () => {
    console.log("Server is running");
});
