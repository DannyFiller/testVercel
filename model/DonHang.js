const mongoose = require("mongoose");

const donHangSchema = new mongoose.Schema({
    ThoiGian:{
        type: Date,
        require:true,
    },
    DonGia:{
        type:Number,
        require:true,
    },
    MaTaiKhoan:{
        type:mongoose.Types.ObjectId,
        ref: "TaiKhoan"
    },
});

let DonHang = mongoose.model("DonHang",donHangSchema);
module.exports = {DonHang};