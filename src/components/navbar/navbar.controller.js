'use strict';

angular.module("sselabWebApp").controller("NavbarCtrl", function ($scope, $location, $http) {
  $scope.currentNav = $location.path();
  $scope.navData = [
    {"url": "#/", "name": "about"},
    {"url": "#/people", "name": "people"},
    {"url": "#/paper", "name": "paper"},
    {"url": "#/project", "name": "project"},
    {"url": "#/software", "name": "software"},
    {"url": "#/blog", "name": "blog"},
    {"url": "#/sponsor", "name": "sponsor"},
    {"url": "#/photo", "name": "photo"}
  ];
});
