'use strict';

angular.module("sselabWebApp").controller("SponsorCtrl", function ($scope, $location, $http) {
  $scope.sponsors = [
    {
      "url": "#/sponsor",
      "name": "Nucgaek Frabklin",
      "title": "sponsor",
      "image": "assets/images/people.jpg",
      "contact": [
        {"url": "", "fa": "envelope"},
        {"url": "", "fa": "home"},
        {"url": "", "fa": "book"}
      ]
    },
    {
      "url": "#/sponsor",
      "name": "Nucgaek Frabklin",
      "title": "sponsor",
      "image": "assets/images/people.jpg",
      "contact": [
        {"url": "", "fa": "envelope"},
        {"url": "", "fa": "home"},
        {"url": "", "fa": "book"}
      ]
    },
    {
      "url": "#/sponsor",
      "name": "Nucgaek Frabklin",
      "title": "sponsor",
      "image": "assets/images/people.jpg",
      "contact": [
        {"url": "", "fa": "envelope"},
        {"url": "", "fa": "home"},
        {"url": "", "fa": "book"}
      ]
    }
  ];
});
