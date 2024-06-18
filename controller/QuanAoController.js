const { QuanAo } = require("../model/QuanAo")


const QuanAoController ={
    addQuanAo: async(req,res)=>{
        try{
            const newQuanAo = new QuanAo(req.body);
            const saveQuanAo = await newQuanAo.save();
            res.status(200).json(saveQuanAo);
        
        }catch(err){
            res.status(500).json(err);
        }
    },

    getAllQuanAo: async(req,res)=>{
        try{
            const quanAos = await QuanAo.find();
            res.status(200).json(quanAos);
        }catch{
            res.status(500).json(err);
        }
    },

    updateQuanAo:async(req,res) => {
        try{
            const quanAoUpdate = await QuanAo.findById(req.params.id);
            await quanAoUpdate.updateOne({$set:req.body});
            res.status(200).json(quanAoUpdate);
        }catch(err){
            res.status(500).json(err);
        }
    },
    
    
    deleteQuanAo:async(req,res) =>{
        try{
            const quanAoDel = await QuanAo.findByIdAndDelete(req.params.id);
            res.status(200).json(quanAoDel);
        }catch(err){
            res.status(500).json(err);
        }
    }

    
}

module.exports = QuanAoController;