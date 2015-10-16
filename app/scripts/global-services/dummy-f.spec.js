'use strict';

describe('Factory: Dummy', function () {
    // load the service's module
    beforeEach(module('jtree'));

    // instantiate service
    var Dummy;
    beforeEach(inject(function (_Dummy_) {
        Dummy = _Dummy_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});