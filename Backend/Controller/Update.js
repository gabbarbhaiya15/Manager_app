const express = require('express');
const Userdata = require('../Models/Usercollection');
const router = express.Router();




router.put('/:id' , async (req,res)=>{
    console.log("updating")
    const {id} = req.params;
    const {first_name, last_name,email,domain,avatar} = req.body;
    await Userdata.findByIdAndUpdate(id,{first_name, last_name,email,domain,avatar},{new:true,useFindAndModify:false})
    .then((res)=>{console.log(res);})
    .catch((err)=>{console.log(err);})
    res.send("success");

})
module.exports = router;