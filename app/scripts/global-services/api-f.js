/**
 * @ngdoc service
 * @name jtree.Api
 * @description
 * # Api
 * Factory in the jtree.
 */

var sendgrid = sendgrid;
angular.module('jtree')
    .factory('Api', function ($location, $anchorScroll, $rootScope, $http)
    {
        'use strict';

        // INITIALIZATION


        // ACTUAL DEFINITION
        var service = {};
        service.methods = {
            email: function (email) {
                console.log('TEST', email);
                var text = 'The plans selected for you are (plans), these are suggestions based on the usage you entered and is a great tool to assist in selecting and negotiating the next plan to go on.\r\nOur hope is that you have found this free service valuable and that it will help Australian consumers become more informed buyers with their service providers. We serve to inspire change in the industry that gives control back to the ozzy battlers, by simplifying the telco game!\r\n';
                angular.forEach(email.text, function (val) {
                    angular.forEach(val, function (value, key) {
                        text = key === 'calls' ? text + '\n' + key + ': ' + value.min + ' - ' + value.max:
                        text + '\n' + key + ': ' + value + ' ';
                    });
                    text = text + ' \r\n';
                });
                console.log('text', text);
                email.text = text;
                //Request
                $http.post('/api/email', email).then(
                  function(data, status) {
                      console.log('Sent ok');
                  }, function(data, status) {
                      console.log('Error');
                  }

                );
            },
            scrollTo: function (id) {
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash(id);
                    $anchorScroll();
            },
            filterPlans: function(criteria, array){
                console.log('filtering plans');
                var filteredPlans = [];
                angular.forEach(array, function(value, key){
                    if(criteria.sms <= value.sms +100 &&
                      criteria.sms >= (value.sms -100) &&
                      criteria.data <= (value.data +500) &&
                      criteria.data >= (value.data -500) &&
                      criteria.calls <= (value.calls.max +50) &&
                      criteria.calls >= (value.calls.min -50)){
                        filteredPlans.push(value);
                    }
                });
                return filteredPlans;
            }
        };
        service.models = {
            capture:{},
            usage:{},
            offers:{}
        };

        service.style = {
            rangeTrack: function(percent){
                return {
                    background: 'linear-gradient(90deg,  rgba(68,102,173,1) 0%, rgba(68,102,173,.9)  '+ percent + '%' +', rgba(68,102,173,.8)  '+ percent + '%' +', rgba(68,102,173,.6) '+ percent + '%' +',rgba(0,0,0,.4) '+ percent + '%' +',rgba(0,0,0,.1) 100%)',
                    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'rgba(0,0,0,.6)\', endColorstr=\'rgba(0,0,0,.3)\',GradientType=1 )'
                };
            },
            forward: function(){
                service.style.motion.slide='slide-right';
            },
            back: function(view){
                $rootScope.ui.show=view;
            },
            margin: {
                bottom: {
                    marginBottom:'1em'
                }
            },
            flex: {
                parent: {
                    width:'auto',
                    display:'flex',
                    flexWrap:'wrap'
                },
                child: {
                    flex: '1 1 auto'
                }
            },
            viewLeads: {
                background:'rgba(0,0,0, .2)',
                marginBottom:'.25em'},
            viewLeadsItem: {
                textDecoration:'underline',
                padding:'.1em'
            }


        };

        return service;
    });