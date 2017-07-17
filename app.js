/**
 * File_name    : app.js 
 * Description  : Aquaura API code
 * Author       : Vijay Kumar
 */

 var express = require('express');
 var bodyParser = require('body-parser');
 var mongoose = require('mongoose');
 var pug = require('pug');

 var app = express();

 app.use(bodyParser.json());

//  Schema Objects
 Event = require('./models/event');
 Team = require('./models/team');

//  connect to mongo DB via mongoose
mongoose.connect('mongodb://localhost/aquaura');
var db = mongoose.connection;

// routes

app.get('/',function(req,res) {
    res.send('<h1> Aquaura API </h1> <br> <a href="/api/events">Events</a>');
})

// route: /api/events

app.get('/api/events', function(req,res){
    // get all events
    Event.getEvents(function(error,events){
        if (error) {
            throw error;
        }
        res.json(events);
    })
})

var port = 3000;
app.listen(port);
console.log('listening at port', port);