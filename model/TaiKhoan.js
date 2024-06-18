const mongoose = require("mongoose");

const taiKhoanSchema = new mongoose.Schema({
    TenTaiKhoan:{
        type: String,
        require: true,
    },
    MatKhau:{
        type:String,
        require:true,
    },
    TenNguoiDung:{
        type:String,
        require:true,
    },
    VaiTro:{
        type:Number,
        require: true,
    },
    
});

let TaiKhoan = mongoose.model("TaiKhoan",taiKhoanSchema);
module.exports = {TaiKhoan};