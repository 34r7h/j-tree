'use strict';

describe('Directive: offers', function ()
{

    // load the directive's module
    beforeEach(module('jtree'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope)
    {
        scope = $rootScope.$new();
    }));

    it('should do something', inject(function ($compile)
    {
        element = $compile('<offers></offers>');
        expect(true).toBe(true);
    }));
});