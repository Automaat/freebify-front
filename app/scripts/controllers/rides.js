'use strict';

/**
 * @ngdoc function
 * @name freebifyApp.controller:RidesCtrl
 * @description
 * # RidesCtrl
 * Controller of the freebifyApp
 */
angular.module('freebifyApp')
  .controller('RidesCtrl', function ($rootScope, $http, serverAddress, $scope) {
    $http.get(serverAddress + '/api/rides/')
      .then(function (response) {
        $scope.rides = response.data;
      }, function () {
        console.info('Offers not found')
      });
  });
