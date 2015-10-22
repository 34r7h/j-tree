/**
 * @ngdoc service
 * @name jtree.Api
 * @description
 * # Api
 * Factory in the jtree.
 */
angular.module('jtree')
    .factory('Api', function ($location, $anchorScroll, $rootScope)
    {
        'use strict';

        // INITIALIZATION


        // ACTUAL DEFINITION
        var service = {};
        service.methods = {
            scrollTo: function (id) {
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash(id);
                    $anchorScroll();
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
                    /*'background': '-moz-linear-gradient(90deg,  rgba(0,0,0,.6) 0%, rgba(0,0,0,.5) '+ percent + '%' +', rgba(0,0,0,.4) '+ percent + '%' +', rgba(0,0,0,.2) '+ percent + '%' +', rgba(0,0,0,.4) '+ percent + '%' +', rgba(0,0,0,.3) 100%)',
                    background: '-webkit-gradient(linear, left bottom, right top, color-stop(0%,rgba(0,0,0,.6)), color-stop('+ percent + '%' +',rgba(0,0,0,.5)), color-stop('+ percent + '%' +',rgba(0,0,0,.4)), color-stop('+ percent + '%' +',rgba(0,0,0,.2)), color-stop('+ percent + '%' +',rgba(0,0,0,.4)), color-stop(100%,rgba(0,0,0,.3)))',
                    background: '-webkit-linear-gradient(90deg,  rgba(0,0,0,.6) 0%,rgba(0,0,0,.5) '+ percent + '%' +',rgba(0,0,0,.4) '+ percent + '%' +',rgba(0,0,0,.2) '+ percent + '%' +',rgba(0,0,0,.4) '+ percent + '%' +',rgba(0,0,0,.3) 100%)',
                    background: '-o-linear-gradient(90deg,  rgba(0,0,0,.6) 0%,rgba(0,0,0,.5) '+ percent + '%' +',rgba(0,0,0,.4) '+ percent + '%' +',rgba(0,0,0,.2) '+ percent + '%' +',rgba(0,0,0,.4) '+ percent + '%' +',rgba(0,0,0,.3) 100%)',
                    background: '-ms-linear-gradient(90deg,  rgba(0,0,0,.6) 0%,rgba(0,0,0,.5) '+ percent + '%' +',rgba(0,0,0,.4) '+ percent + '%' +',rgba(0,0,0,.2) '+ percent + '%' +',rgba(0,0,0,.4) '+ percent + '%' +',rgba(0,0,0,.3) 100%)',*/
                    background: 'linear-gradient(90deg,  rgba(0,0,0,.6) 0%,rgba(0,0,0,.5) '+ percent + '%' +',rgba(0,0,0,.4) '+ percent + '%' +',rgba(0,0,0,.2) '+ percent + '%' +',rgba(0,0,0,.4) '+ percent + '%' +',rgba(0,0,0,.1) 100%)',
                    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'rgba(0,0,0,.6)\', endColorstr=\'rgba(0,0,0,.3)\',GradientType=1 )'
                }
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