var config = require('./config.js'), 
    mongoose = require('mongoose'),   
    express = require('./express.js');

module.exports.start = function() {
  var app = express.init();
  var pConnection = process.env.PORT || config.port;
  app.listen(pConnection, function() {
    console.log('App listening on port', pConnection);
  });
};