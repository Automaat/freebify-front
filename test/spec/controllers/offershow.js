'use strict';

describe('Controller: OffershowCtrl', function () {

  // load the controller's module
  beforeEach(module('freebifyApp'));

  var OffershowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OffershowCtrl = $controller('OffershowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OffershowCtrl.awesomeThings.length).toBe(3);
  });
});
