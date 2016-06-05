'use strict';

/**
 * @ngdoc function
 * @name freebifyApp.controller:OffershowCtrl
 * @description
 * # OffershowCtrl
 * Controller of the freebifyApp
 */
angular.module('freebifyApp')
  .controller('OffershowCtrl', function ($localStorage, $scope, $http, $routeParams, serverAddress) {

    $http.get(serverAddress + '/api/offers/' + $routeParams.id)
      .then(function (response) {
        $scope.offer = response.data;
        console.log(response.data);
        $scope.map = { center: $scope.offer.start, zoom: 15 ,
          events: {
            tilesloaded: function (map) {
              $scope.$apply(function () {
                $scope.mapInstance = map;
              });
            }
          }
        };

        $scope.marker = {
          id: 0,
          coords: $scope.offer.start
        };
      }, function () {
        console.info('Event not found')
      });
  });
