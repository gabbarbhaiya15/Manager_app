const mongoose = require('mongoose')
const express = require('express')

const TeamSchema = new mongoose.Schema({
    name: String,
  members: 
    [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Userdata',
    },],
  
  team_pic:{ type: 'String', required: true},


})
const Teamdata = mongoose.model('Teamdata',TeamSchema);
module.exports = Teamdata;