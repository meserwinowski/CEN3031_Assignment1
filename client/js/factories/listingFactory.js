// var path = require('path');
var pConnection = '8080';
angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      // console.log(path.join('http://localhost:', pConnection, '/api/listings'));
      // return $http.get('http://localhost:8080/api/listings');
      return $http.get('https://cen3031-assignments.herokuapp.com/api/listings');
    },
	
	  create: function(listing) {
      // return $http.post('http://localhost:8080/api/listings', listing);
      return $http.post('https://cen3031-assignments.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
      /* Return result of HTTP delete method */
      // return $http.delete('http://localhost:8080/api/listings', id);
      return $http.delete('https://cen3031-assignments.herokuapp.com/api/listings', id);
    }
  };
  return methods;
});