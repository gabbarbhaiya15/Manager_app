const express = require('express');
const Userdata = require('../Models/Usercollection');
const router = express.Router();



router.post('/', (req,res)=>{
    let userpattern = new RegExp("^"+req.body.query)
    Userdata.find({first_name:{$regex:userpattern}})
    .select("_id first_name")
 .then((user)=>{
    res.status(200).json((user))
 })
 .catch((error)=>{
    res.status(400).json("error in searching item ")
 })
})
module.exports = router;