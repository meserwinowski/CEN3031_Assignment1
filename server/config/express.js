var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri, { useMongoClient: true });

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  // Serve static files
  app.use('/', express.static(path.join(__dirname, '/../../client')))

  //Use the listings router for requests to the app
  app.use(`/api/listings`, listingsRouter);

  // Go to homepage for all routes not specified
  app.get('/*', function(req, res) {
    console.log(__dirname);
    res.sendFile('index.html', { root: __dirname + '/../../client' });
  });

  return app;
};  