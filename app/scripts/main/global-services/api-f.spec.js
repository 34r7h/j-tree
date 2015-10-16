'use strict';

describe('Factory: Api', function () {
    // load the service's module
    beforeEach(module('jtree'));

    // instantiate service
    var Api;
    beforeEach(inject(function (_Api_) {
        Api = _Api_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});