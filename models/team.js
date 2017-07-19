/**
 * Team Schema
 */

 var mongoose = require('mongoose');

 var teamSchema = mongoose.Schema({
     name:{
         type: String,
         required:true
     },
    members:{
        type: Array,
        required: true
    },
     points:{
        type: Number,
        required: true
     },
    created_date:{
        type: Date,
        default: Date.now()
    }
 });

 var Team = module.exports = mongoose.model('Team', teamSchema);

//  get all teams

module.exports.getTeams = function(callback,limit){
    Team.find(callback).limit(limit);
}

// get Team by id

module.exports.getTeamById = function(id,callback){
    Team.findById(id,callback);
}

// Add a team

module.exports.addTeam = function(team,callback){
    Team.create(team,callback);
}