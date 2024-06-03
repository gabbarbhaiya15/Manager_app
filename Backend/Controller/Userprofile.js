const express = require('express');
const Userdata = require('../Models/Usercollection');
const router = express.Router();

router.get('/:id', async (req, res) => {
  
   

    try {
        const id = req.params.id.trim();
        console.log(id);
        const user = await Userdata.findOne({ _id: id }).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        console.log(user);
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(404).json({ error: "Internal server error" });
    }
});

module.exports = router;
