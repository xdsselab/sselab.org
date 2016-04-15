'use strict';

angular.module("sselabWebApp").controller("HeaderCtrl", function ($scope, $location, $http, $rootScope) {
  $scope.currentNav = $location.path();
  var subNavIndex = $scope.currentNav.indexOf('/', 1);
  if (subNavIndex === -1) {
    subNavIndex = $scope.currentNav.length;
  }
  $scope.currentNav = $scope.currentNav.substr(0, subNavIndex);

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

  var title = $scope.currentNav.slice(1)
  $rootScope.headTitle = title.charAt(0).toUpperCase() + title.slice(1);
});
