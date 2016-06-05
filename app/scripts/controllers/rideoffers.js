'use strict';

/**
 * @ngdoc function
 * @name freebifyApp.controller:RideoffersCtrl
 * @description
 * # RideoffersCtrl
 * Controller of the freebifyApp
 */
angular.module('freebifyApp')
  .controller('RideoffersCtrl', function ($rootScope, $http, serverAddress, $scope) {

    $http.get(serverAddress + '/api/offers/active')
      .then(function (response) {
        $scope.offers = response.data;
      }, function () {
        console.info('Offers not found')
      });
  });
