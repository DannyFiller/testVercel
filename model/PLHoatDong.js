const mongoose = require("mongoose");

const plHoatDongSchema = new mongoose.Schema({
    MaPLHoatDong:{
        type: String,
        require: true,
    },
    TenPLHoatDOng:{
        type:String,
        require:true,
    },
});

let PLHoatDong = mongoose.model("PLHoatDong",plHoatDongSchema);
module.exports = {PLHoatDong};