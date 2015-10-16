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
console.log(fb, ref);

angular.module('jtree')
    .factory('Data', function ($firebaseObject, $firebaseArray, $firebaseAuth)
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
                var createRef = ref + '/' + type;
                var newFb = new fb(createRef);
                var list = $firebaseArray(newFb).$loaded().then(function(promise){
                    promise.$add(data);
                    return;
                });

            },
            save:function(type, key, data){
                var saveRef = ref + '/' + type + '/' + key;
                var newFb = new fb(saveRef);
                var obj = $firebaseObject(newFb);
                obj.$value = data;
                obj.$save().then(function(ref) {
                    ref.key() === obj.$id; // true
                }, function(error) {
                    console.log("Error:", error);
                });
            },
            remove:function(type, key){
                var removeRef = ref + '/' + type + '/' + key;
                var newFb = new fb(removeRef);
                var obj = $firebaseObject(newFb);
                obj.$remove().then(function(ref) {
                    // data has been deleted locally and in the database
                }, function(error) {
                    console.log("Error:", error);
                });

            }
        };

        return service;
    });