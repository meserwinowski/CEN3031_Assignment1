'use strict';
  /* Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement! */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), // Mongoose Model comes from here
    config = require('./config.js'),
    listing = require('./listings.json');  // Listings File with all the buildings

/* Connect to your database */
mongoose.connect(config.db.uri, { useNewUrlParser: true });

  /* Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database */
fs.readFile('listings.json', 'utf8', function(err, listing) { // File System Read JSON file to create a listing object
  if (err) {
    throw err;
  }
  var items = JSON.parse(listing); // Parse the JSON file
  items.entries.forEach(function(item) { // Access each list item in entries
    var itemModel = new Listing(item); // Create a new Schema document from each list
    itemModel.save(function(err, s) { // Save each item model to database
      if (err) {
        throw err;
      }
      console.log(s); // Log each item as it is saved
    });
  });
});


/* Once you've written + run the script, check out your MongoLab database to ensure that 
it saved everything correctly. */