const express = require('express');
const  Userdata = require('../Models/Usercollection');
const { id } = require('postcss-selector-parser');
const router=express.Router();

router.delete('/:id', async (req,res)=>{
    console.log("deleting")
const { id } = req.params   ;
await Userdata.findByIdAndDelete(id)
.then(()=> res.send("deleted"))
.catch(()=> res.send("gadbad"));
})
module.exports = router;
