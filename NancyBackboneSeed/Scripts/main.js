//entry point for entire application


//load up shims
require("./shim/marionette-radio.js");

//load our app
var app = require('./app/app');

//kick things off 
app.start();  