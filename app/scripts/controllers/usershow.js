'use strict';

/**
 * @ngdoc function
 * @name freebifyApp.controller:UsershowCtrl
 * @description
 * # UsershowCtrl
 * Controller of the freebifyApp
 */
angular.module('freebifyApp')
  .controller('UsershowCtrl', function ($http, $scope, serverAddress, $routeParams) {

    $http.get(serverAddress + '/api/users/' + $routeParams.id)
      .then(function (response) {
        $scope.user = response.data;
        console.log(response.data);
      }, function () {
        toastr.error(response.data.errDescr);
      });
  });
