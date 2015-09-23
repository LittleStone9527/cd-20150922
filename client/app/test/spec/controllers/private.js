'use strict';

describe('Controller: PrivateCtrl', function () {

  // load the controller's module
  beforeEach(module('cdApp'));

  var PrivateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrivateCtrl = $controller('PrivateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PrivateCtrl.awesomeThings.length).toBe(3);
  });
});
