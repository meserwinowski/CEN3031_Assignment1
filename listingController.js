angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) { // Controller takes a $scope to bind functionality with the HTML view and the controller
    $scope.listings = Listings; // Second input parameter is a JSON list
    $scope.form = {};

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() { 
      $scope.listings.push({ // Push Add New Building form onto an array in the global scope to display
        'code':$scope.form.code,
        'name':$scope.form.name,
        'address':$scope.form.address,
        'coordinates': {
          'latitude':$scope.form.latitude,
          'longitude':$scope.form.longitude
        }
      });

      // Clear global Scope form for when adding a new building
      $scope.form = {};

      // $("#BuildingTable").load( "index.html #BuildingTable" );
    };

    $scope.deleteListing = function(index) {
      // Splice out the item at index so listings array has no holes
      $scope.listings.splice(index, 1)
    };

    $scope.showDetails = function(index) {
      $scope.code = $scope.listings[index].code;
      $scope.name = $scope.listings[index].name;

      // Try Catch Blocks required as some listing items are missing address and coordinates
      try {
        $scope.address = $scope.listings[index].address;
      }
      catch(err) {
        $scope.address = ''
      }
      try {
        $scope.latitude = "(" + $scope.listings[index].coordinates.latitude + ", ";
        $scope.longitude = $scope.listings[index].coordinates.longitude + ")";
      }
      catch(err) {
        $scope.latitude = '';
        $scope.longitude = '';
      }
    };
  }
]);