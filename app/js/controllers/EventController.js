'use strict';

(function () {
    var eventController;
    var module = angular.module("eventsApp");
    eventController = function ($scope, EventData, $log, $anchorScroll) {

        $scope.sortOrder = "name";

        EventData.event().$promise.then(function (event) {
            $scope.event=event;
        }).catch(function (error) {
            $log.warn(error);
        });
        $scope.upVote = function (session) {
            session.upVoteCount++;
        };
        $scope.downVote = function (session) {
            session.upVoteCount--;
        };
        // $scope.scroll = function () {
        //     $anchorScroll();
        // }


    };
    module.controller("EventController",eventController);
}());
