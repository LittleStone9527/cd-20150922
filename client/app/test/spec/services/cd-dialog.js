'use strict';

describe('Service: cdDialog', function () {

  // load the service's module
  beforeEach(module('cdApp'));

  // instantiate service
  var cdDialog;
  beforeEach(inject(function (_cdDialog_) {
    cdDialog = _cdDialog_;
  }));

  it('should do something', function () {
    expect(!!cdDialog).toBe(true);
  });

});
