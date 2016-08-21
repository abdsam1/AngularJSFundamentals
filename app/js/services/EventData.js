/**
 * Created by samad on 7/29/16.
 */

(function () {
  var module = angular.module("eventsApp");
  var EventData = function ($http, $log , $resource) {
  var event = {
          name :"AngularJS Boot Camp",
          date :"1/1/2016",
          time :"10:30 AM",
          location : {
              address:"Google Headquaters",
              city: "Mountain View",
              province:"CA"
          },
          imageUrl: "/img/angularjs-logo.png",
          sessions: [
              {
                  "id": 1,
                  "name": "Directives Masterclass",
                  "creatorName": "Bob Smith",
                  "duration": 1,
                  "level": "Advanced",
                  "abstract": "In this session you will learn the ins and outs of directives!",
                  "upVoteCount": 0
              },
              {
                  "id": 2,
                  "name": "Scopes for fun and profit",
                  "creatorName": "John Doe",
                  "duration": 3,
                  "level": "Introductory",
                  "abstract": "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
                  "upVoteCount": 0
              },
              {
                  "id": 3,
                  "name": "Well Behaved Controllers",
                  "creatorName": "Jane Doe",
                  "duration": 2,
                  "level": "Intermediate",
                  "abstract": "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
                  "upVoteCount": 0
              }
          ]

      };
      var getEvents = function () {
          // $http.get("/data/event/1").then(function (response) {
          //     $log.info(response);
          //     return response.data;
          // },function (error) {
          //     $log.warn(error);
          // });
          return $resource('data/event/:id',{id:'@id'}).get({id:1});
      };
      return {
          event:getEvents
      };
  };



  module.factory("EventData",EventData);  
}());
