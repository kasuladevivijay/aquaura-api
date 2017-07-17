/**
 * Event Schema 
 */

 var mongoose = require('mongoose');

 var eventSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    start_date:{
        type: Date,
        required: true
    },
    end_date:{
        type: Date,
        required: true
    },
    created_date:{
        type: Date,
        default: Date.now()
    }
 });

//  export the model
 var Event = module.exports = mongoose.model('Event',eventSchema);

//  get all Events

module.exports.getEvents = function (callback,limit) {
    Event.find(callback).limit(limit);
}

// get event by id

module.exports.getEventById =  function(id,callback){
    Event.findById(id,callback);
}

// Add an Event

module.exports.addEvent = function(event, callback){
    Event.create(event,callback);
}