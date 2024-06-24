const mongoose  = require("mongoose");

const quanAoSchema = new mongoose.Schema({
    TenQuanAo:{
        type: String,
        require: true,
    },
    Gia:{
        type:Number,
        require:true,
    },
    SoLuong:{
        type:Number,
        require:true,
    },
    HinhAnh:{
        type:String,
    },
    MaPL:{
        type:mongoose.Types.ObjectId,
        ref:"PhanLoai",
    },
    MaPLHoatDong:{
        type:mongoose.Types.ObjectId,
        ref:"PLHoatDong",
    }

});

let QuanAo = mongoose.model("QuanAo",quanAoSchema);

module.exports = {QuanAo};