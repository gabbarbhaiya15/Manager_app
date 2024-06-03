const express = require('express');
const Teamdata = require('../Models/Teamcollection')
const router= express.Router();
 router.get('/', async  (req, res) => {

await Teamdata.find()
.then((user)=>{
    res.status(200).json(user);
})
.catch((error)=>{console.log("error in  getting post")})

 })
module.exports = router;