'use strict';
(function(){
    var module = angular.module('eventsApp');
    module.filter('u',function(){
        return function(input) {
            return input.toUpperCase();
        }
    });
    module.filter('l',function () {
        return function (input) {
            return input.toLowerCase();
        }
    });
}());


