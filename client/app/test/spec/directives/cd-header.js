'use strict';

describe('Directive: cdHeader', function () {

  // load the directive's module
  beforeEach(module('cdApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cd-header></cd-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cdHeader directive');
  }));
});
