const {PLHoatDong} = require("../model/PLHoatDong");

const PLHoatDongController = {
    getAllPLHoatDong: async(req,res)=>{
        try{
            const plHoatDong = await PLHoatDong.find();
            res.status(200).json(plHoatDong);
        }catch{
            res.status(500).json(err);
        }
    },

    addPLHoatDong : async(req,res) =>{
        try{
            const newPLHoangDong = new PLHoatDong(req.body);
            const savePLHoatDong = await newPLHoangDong.save();
            res.status(200).json(savePLHoatDong);
        }catch{
            res.status(500).json(err);
        }
    },
    updatePLHoatDong:async(req,res) => {
        try{
            const hoatDongUpdate = await PLHoatDong.findById(req.params.id);
            await hoatDongUpdate.updateOne({$set:req.body});
            res.status(200).json(hoatDongUpdate);
        }catch(err){
            res.status(500).json(err);
        }
    },
    
    
    deletePLHoatDong:async(req,res) =>{
        try{
            const hoatDongDel = await PLHoatDong.findByIdAndDelete(req.params.id);
            res.status(200).json(hoatDongDel);
        }catch(err){
            res.status(500).json(err);
        }
    }

}

module.exports = PLHoatDongController;