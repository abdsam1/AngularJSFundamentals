(function () {
    var module = angular.module("eventsApp");
    var EditEventController = function ($scope) {
        $scope.saveEvent = function(event,newEventForm){
            if(newEventForm.$valid) {
                console.log(newEventForm);
                window.alert(event.name);
            }
        };
        $scope.cancelEdit = function () {
            window.location = "/EvenDetails.html";
        };
    };

    module.controller("EditEventController",EditEventController);
}());