'use strict';

angular.module("sselabWebApp", ['ngRoute'])
  .filter('breakFilter', function() {
    return function (text) {
      if (!!text) {
        return text.replace(/\n/g, '<br />');
      }
    };
  })
  .config(function ($routeProvider, $compileProvider) {
    $routeProvider
      .when("/", {
        templateUrl: 'app/home/home.html'
      })
      .when("/people", {
        templateUrl: 'app/people/people.html',
        controller: 'PeopleCtrl'
      })
      .when("/paper", {
        templateUrl: 'app/paper/paper.html',
        controller: 'PaperCtrl'
      })
      .when("/project", {
        templateUrl: 'app/project/project.html',
        controller: 'ProjectCtrl'
      })
      .when("/software", {
        templateUrl: 'app/software/software.html',
        controller: 'SoftwareCtrl'
      })
      .when("/blog/:title?", {
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogCtrl'
      })
      .when("/sponsor", {
        templateUrl: 'app/sponsor/sponsor.html',
        controller: 'SponsorCtrl'
      })
      .when("/photo", {
        templateUrl: 'app/photo/photo.html',
        controller: 'PhotoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $compileProvider.aHrefSanitizationWhitelist(/^(http):/);
  });
