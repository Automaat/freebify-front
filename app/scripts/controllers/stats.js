'use strict';

/**
 * @ngdoc function
 * @name freebifyApp.controller:StatsCtrl
 * @description
 * # StatsCtrl
 * Controller of the freebifyApp
 */
angular.module('freebifyApp')
  .controller('StatsCtrl', function (highchartsNG, $scope, $http, serverAddress) {

    $http.get(serverAddress + '/api/statistics/distance_stats/')
      .then(function (response) {
        $scope.distanceStats = response.data;
        console.log(response.data);
      }, function () {
        toastr.error(response.data.errDescr);
      });

    $http.get(serverAddress + '/api/statistics/top_users/')
      .then(function (response) {
        $scope.topUsers = response.data;
        console.log(response.data);
      }, function () {
        toastr.error(response.data.errDescr);
      });

    $http.get(serverAddress + '/api/statistics/success_compare/')
      .then(function (response) {
        $scope.chartData = response.data;

        $scope.chartConfig = {

          options: {
            //This is the Main Highcharts chart config. Any Highchart options are valid here.
            //will be overriden by values specified below.
            chart: {
              type: 'column'
            },
            tooltip: {
              style: {
                padding: 10,
                fontWeight: 'bold'
              }
            }
          },
          //The below properties are watched separately for changes.

          //Series object (optional) - a list of series using normal Highcharts series options.
          series: [{
            data: []
          }],
          //Title configuration (optional)
          title: {
            text: 'Hello'
          },
          //Boolean to control showing loading status on chart (optional)
          //Could be a string if you want to show specific loading text.
          loading: false,
          //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
          //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
          xAxis: {
            categories: ['Successes', 'Failures', 'All rides'],
            // title: {text: 'values'}
          },
          //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
          useHighStocks: false,
          //size (optional) if left out the chart will default to size of the div or something sensible.
          size: {
            width: 700,
            height: 500
          },
          //function (optional)
          func: function (chart) {
            //setup some logic for the chart
          }
        };

        $scope.chartConfig.series.push({data: [{
          name: 'All rides',
          color:'#0000FF',
          y: $scope.chartData.allRides
        }]});

        $scope.chartConfig.series.push({data: [{
          name: 'Successes',
          color:'##00FF00',
          y: $scope.chartData.successes
        }]});

        $scope.chartConfig.series.push({data: [{
          name: 'Failures',
          color:'#ff0000',
          y: $scope.chartData.failures
        }]});

        console.log($scope.chartData);
      }, function () {
        toastr.error(response.data.errDescr);
      });


  });
