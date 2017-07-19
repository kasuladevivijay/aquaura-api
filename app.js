/**
 * File_name    : app.js 
 * Description  : Aquaura API code
 * Author       : Vijay Kumar
 */

 var express = require('express');
 var bodyParser = require('body-parser');
 var mongoose = require('mongoose');
 var routes = require('./routes/routes');

 var app = express();

 app.use(bodyParser.json());
 app.use(routes);


//  connect to mongo DB via mongoose
mongoose.connect('mongodb://localhost/aquaura');
var db = mongoose.connection;

var port = 3000;
app.listen(port);
console.log('listening at port', port);