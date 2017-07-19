/**
 *  all routes go here
 */

var express = require('express');
var router = express.Router();
var pug = require('pug');

 //  Schema Objects
Event = require('../models/event');
Team = require('../models/team');
Post = require('../models/post');

// allow cross origin
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes
router.get('/',function(req,res) {
    var html = pug.renderFile('../aquaura-api/views/index.pug');
    res.send(html);
})

// route: /api/events
router.get('/api/events', function(req,res){
    // get all events
    Event.getEvents(function(error,events){
        if (error) {
            throw error;
        }
        res.json(events);
    })
})

// route: /api/teams
router.get('/api/teams', function(req,res){
    // get all teams
    Team.getTeams(function(error,teams){
        if (error) {
            throw error;
        }
        res.json(teams);
    })
})

// route: /api/posts
router.get('/api/posts', function(req,res){
    // get all posts
    Post.getPosts(function(error,posts){
        if (error) {
            throw error;
        }
        res.json(posts);
    })
})
module.exports = router;