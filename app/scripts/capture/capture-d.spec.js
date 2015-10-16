'use strict';

describe('Directive: capture', function ()
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
        element = $compile('<capture></capture>');
        expect(true).toBe(true);
    }));
});