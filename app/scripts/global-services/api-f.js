/**
 * @ngdoc service
 * @name jtree.Api
 * @description
 * # Api
 * Factory in the jtree.
 */

var sendgrid = sendgrid;
angular.module('jtree')
    .factory('Api', function ($location, $anchorScroll, $rootScope, $http, Data)
    {
        'use strict';

        // INITIALIZATION


        // ACTUAL DEFINITION
        var service = {};
        service.methods = {
            getDate: function () {
                return Date.now();
            },
            email: function (email) {
                var emailText = '';
                var emailSubject = '';
                angular.forEach( Data.data.dataObj.texts , function (val) {
                    val.type === 'email' ? emailText = val.text : null;
                    val.type === 'emailSubject' ? emailSubject = val.text : null;
                });
                var text = emailText + '\r\n';
                angular.forEach(email.text, function (val) {
                    console.log('email',val);
                    angular.forEach(val, function (value, key) {
                        text = key === 'calls' ? text + '\n' + key + ': ' + value.min + ' - ' + value.max:
                        text + '\n' + key + ': ' + value + ' ';
                    });
                    text = text + ' \r\n';
                });
                email.text = text;
                email.subject = emailSubject;
                //Request
                $http.post('/api/email', email).then(
                  function(data, status) {
                      console.log('Sent ok');
                  }, function(data, status) {
                      console.log('Error');
                  }

                );
            },
            emailSales: function (emailSales) {
                console.log('emailSales', emailSales);
                var emailSubject = '';
                angular.forEach( Data.data.dataObj.texts , function (val) {
                    emailSubject = val.text
                });
                var text = '';
                angular.forEach(emailSales.text, function (val) {
                    console.log('emailSales val',val);
                    angular.forEach(val, function (value, key) {
                        text = key === 'calls' ? text + '\n' + key + ': ' + value.min + ' - ' + value.max:
                        text + '\n' + key + ': ' + value + ' ';
                    });
                    text = text + ' \r\n';
                });
                emailSales.text = text;
                emailSales.subject = emailSubject;
                //Request
                $http.post('/api/emailSales', emailSales).then(
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
                var filteredPlans = [];
                angular.forEach(array, function(value, key){
                    if(criteria.data <= (value.data +500) &&
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