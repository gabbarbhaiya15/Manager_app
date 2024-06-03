const express = require('express')
const router = express.Router();
const Userdata = require('../Models/Usercollection');
const  Teamdata = require('../Models/Teamcollection')



router.post('/', async (req,res)=>{
    try {
        const { name, memberIds,team_pic } = req.body;
        const members = await Userdata.find({ _id: { $in: memberIds } });
        const newTeam = await Teamdata.create({ name, members,team_pic });
        res.json(newTeam);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})
module.exports=router;




