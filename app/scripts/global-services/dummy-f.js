/**
 * @ngdoc service
 * @name jtree.Dummy
 * @description
 * # Dummy
 * Factory in the jtree.
 */
angular.module('jtree')
    .factory('Dummy', function ()
    {
        'use strict';

        // INITIALIZATION


        // ACTUAL DEFINITION
        var service = {
            providers: ['telstra', 'optus', 'voda', 'other'],
            plans: [
                {provider: 'telstra', name: 'telstra1', data: 500, sms:50, calls: 100},
                {provider: 'telstra', name: 'telstra2', data: 5000, sms:1100, calls: 'unlimited'},
                {provider: 'optus', name: 'optus1', data: 1000, sms:500, calls: 100},
                {provider: 'optus', name: 'optus2', data: 3000, sms:900, calls: 450},
                {provider: 'voda', name: 'voda1', data: 500, sms:100, calls: 150},
                {provider: 'telstra', name: 'telstra3', data: 2500, sms:1000, calls: 500},
                {provider: 'telstra', name: 'telstra4', data: 5000, sms:1100, calls: 200},
                {provider: 'optus', name: 'optus3', data: 1000, sms:500, calls: 100},
                {provider: 'optus', name: 'optus4', data: 2000, sms:950, calls: 400},
                {provider: 'voda', name: 'voda4', data: 500, sms:50, calls: 50},
                {provider: 'voda', name: 'voda2', data: 5000, sms:2000, calls: 550},
                {provider: 'voda', name: 'voda3', data: 5000, sms:2000, calls: 550}
            ]
        };

        return service;
    });