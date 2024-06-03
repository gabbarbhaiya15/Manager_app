const mongoose = require('mongoose')
const express = require('express')

const usercollectionSchema = new mongoose.Schema({
    first_name:{
        type: 'String', required: true,
    },
    last_name:{ type: 'String', required: true},
    email:{ type: 'String', required: true},
    gender:{ type: 'String', required: true},
    avatar:{ type: 'String', required: true},
    domain:{ type: 'String', required: true},
    
})
const Userdata = mongoose.model('Userdata',usercollectionSchema);
module.exports = Userdata;