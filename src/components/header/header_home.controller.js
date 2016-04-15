'use strict';

angular.module("sselabWebApp").controller("HeaderHomeCtrl", function ($scope, $location, $http, $rootScope) {
  $scope.currentNav = $location.path();
  $scope.navs = [
    {"url": "#/", "name": "about"},
    {"url": "#/people", "name": "people"},
    {"url": "#/paper", "name": "paper"},
    {"url": "#/project", "name": "project"},
    {"url": "#/software", "name": "software"},
    {"url": "#/blog", "name": "blog"},
    {"url": "#/sponsor", "name": "sponsor"},
    {"url": "#/photo", "name": "photo"}
  ];

  $rootScope.headTitle = "About";
});
