'use strict';

/**
 * @ngdoc function
 * @name freebifyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the freebifyApp
 */
angular.module('freebifyApp')
  .controller('LoginCtrl', function ($rootScope, $location, $http, $localStorage, serverAddress, toastr) {
    var self = this;

    var authenticate = function (credentials, callback) {

      $http.post(serverAddress + '/api/login', credentials)
        .then(function success(response) {
          $localStorage.header = {
            headers: {
              'X-AUTH-TOKEN': credentials.nick
            }
          };

          $localStorage.authenticated = true;
          $rootScope.authenticated = true;
        }, function error(response) {
          toastr.error(response.data.errDescr);
          $localStorage.authenticated = false;
          $rootScope.authenticated = false;
        })
    };

    // authenticate();
    self.credentials = {};

    self.login = function () {
      authenticate(self.credentials, function () {
      });
    };
  });
