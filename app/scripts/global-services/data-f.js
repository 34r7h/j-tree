/**
 * @ngdoc service
 * @name jtree.Data
 * @description
 * # Data
 * Factory in the jtree.
 */
var
  fb = Firebase,
  ref='https://irthos.firebaseio.com/tyree';

angular.module('jtree')
    .factory('Data', function ($firebaseObject, $firebaseArray)
    {
        'use strict';

        // INITIALIZATION
        var service = {}, rawObject = new fb(ref);
        // ACTUAL DEFINITION
        service.data = {
            dataObj: $firebaseObject(rawObject),
            dataArr: $firebaseArray(rawObject)
        };
        service.methods = {
            create:function(type, data){
                type !== 'providers' ?
                  data.date = Date.now() :
                  null;

                var createRef = ref + '/' + type;
                var newFb = new fb(createRef);
                $firebaseArray(newFb).$loaded().then(function(promise){
                    promise.$add(data);
                    return;
                });

            },
            save:function(type, key, data){
                var saveRef = ref + '/' + type + '/' + key;
                var newFb = new fb(saveRef);
                var obj = $firebaseObject(newFb);
                obj.$value = data;
                obj.$save();
            },
            remove:function(type, key){
                var removeRef = ref + '/' + type + '/' + key;
                var newFb = new fb(removeRef);
                var obj = $firebaseObject(newFb);
                obj.$remove();

            }
        };

        return service;
    });