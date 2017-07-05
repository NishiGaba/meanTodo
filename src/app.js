//Throw Error for any Syntactical  Mistakes
'use strict';

//Express must be required if you want to use it
var express = require('express');

var router = require('./api');

//Assign an instance to the variable App
var app = express();

//Serve Public Directory when root of site is requested
app.use('/',express.static('public'));

app.use('/api',router);

//Configure the app to listen for requests on port 3000
app.listen(3000,function() {
	console.log("The Server is running on PORT 3000!");
})