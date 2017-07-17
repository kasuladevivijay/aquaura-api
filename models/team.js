/**
 * Team Schema
 */

 var mongoose = require('mongoose');

 var teamSchema = mongoose.Schema({
     teamName:{
         type: String,
         required:true
     },
     points:{
        type: Number,
        required: true
     },
    created_date:{
        type: Date,
        default: Date.now()
    }
 })