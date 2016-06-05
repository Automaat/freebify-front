'use strict';

describe('Controller: RideoffersCtrl', function () {

  // load the controller's module
  beforeEach(module('freebifyApp'));

  var RideoffersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RideoffersCtrl = $controller('RideoffersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RideoffersCtrl.awesomeThings.length).toBe(3);
  });
});
