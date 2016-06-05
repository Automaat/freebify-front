'use strict';

/**
 * @ngdoc overview
 * @name freebifyApp
 * @description
 * # freebifyApp
 *
 * Main module of the application.
 */
var app = angular
  .module('freebifyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toastr',
    'ngStorage',
    'highcharts-ng'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginCtr'
      })
      .when('/stats', {
        templateUrl: 'views/stats.html',
        controller: 'StatsCtrl',
        controllerAs: 'stats'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/rideOffers', {
        templateUrl: 'views/rideoffers.html',
        controller: 'RideoffersCtrl',
        controllerAs: 'rideOffers'
      })
      .when('/offerShow/:id', {
        templateUrl: 'views/offershow.html',
        controller: 'OffershowCtrl',
        controllerAs: 'offerShow'
      })
      .when('/rideshow/:id', {
        templateUrl: 'views/rideshow.html',
        controller: 'RideshowCtrl',
        controllerAs: 'rideShow'
      })
      .when('/userShow/:id', {
        templateUrl: 'views/usershow.html',
        controller: 'UsershowCtrl',
        controllerAs: 'userShow'
      })
      .when('/rides', {
        templateUrl: 'views/rides.html',
        controller: 'RidesCtrl',
        controllerAs: 'rides'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
  });

app.constant('serverAddress', 'http://vps259039.ovh.net:8082');

app.run(function ($rootScope, $localStorage, $http, serverAddress) {
  $rootScope.authenticated = $localStorage.authenticated;

  $rootScope.logout = function() {
      $localStorage.$reset();
      $rootScope.authenticated = false;
      $location.path("/");
  };
});
