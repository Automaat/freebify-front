'use strict';

/**
 * @ngdoc function
 * @name freebifyApp.controller:RideshowCtrl
 * @description
 * # RideshowCtrl
 * Controller of the freebifyApp
 */
angular.module('freebifyApp')
  .controller('RideshowCtrl', function ($localStorage, $scope, $http, $routeParams, serverAddress) {
    $http.get(serverAddress + '/api/rides/' + $routeParams.id)
      .then(function (response) {
        $scope.ride = response.data;
        console.log(response.data);

        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var waypts = []

        var centerCoord = {
          lat: ($scope.ride.start.latitude + $scope.ride.start.latitude) / 2,
          lng: ($scope.ride.end.latitude + $scope.ride.end.latitude) / 2
        };

        var map = new google.maps.Map(document.getElementById('map-container'), {
          zoom: 6,
          center: centerCoord
        });

        for(var i = 0; i < $scope.ride.checkpoints.length; i++) {
          waypts.push({location: $scope.ride.checkpoints[i].longitude + "," + $scope.ride.checkpoints[i].latitude});
        }

        console.log(parseFloat($scope.ride.start.longitude) + "," + parseFloat($scope.ride.start.latitude))

        directionsService.route({
          origin: $scope.ride.start.latitude + "," + $scope.ride.start.longitude,
          destination: $scope.ride.end.latitude + "," + $scope.ride.end.longitude,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status) {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];

          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });

      }, function () {
        console.info('Ride not found')
      });
  });
