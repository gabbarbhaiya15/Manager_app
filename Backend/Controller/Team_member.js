const express = require('express');
const Teamdata = require('../Models/Teamcollection');
const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id; // Accessing ID from route parameters
  console.log(id);

  Teamdata.findOne({ members: id })
    .then(user => {
      if (user) {
        res.status(200).json("Team member");
      } else {
        res.status(404).json("Add in Team");
      }
    })
    .catch(error => {
      console.log("Error in getting post:", error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;
