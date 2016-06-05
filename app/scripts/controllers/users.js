'use strict';

/**
 * @ngdoc function
 * @name freebifyApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the freebifyApp
 */
angular.module('freebifyApp')
  .controller('UsersCtrl', function ($http, $scope, serverAddress) {


    $http.get(serverAddress + '/api/users')
      .then(function (response) {
        $scope.usersServ = response.data;
      }, function () {
        toastr.error(response.data.errDescr);
      });
  });
