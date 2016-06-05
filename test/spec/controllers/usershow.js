'use strict';

describe('Controller: UsershowCtrl', function () {

  // load the controller's module
  beforeEach(module('freebifyApp'));

  var UsershowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsershowCtrl = $controller('UsershowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsershowCtrl.awesomeThings.length).toBe(3);
  });
});
