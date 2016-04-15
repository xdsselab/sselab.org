'use strict';

angular.module("sselabWebApp").controller("PeopleCtrl", function ($scope, $location, $http) {
  $scope.people_groups = [
    {
      "group": "Faculty",
      "people": [
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        }
      ]
    },
    {
      "group": "Graduate Students",
      "people": [
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        }
      ]
    },
    {
      "group": "Undergraduates",
      "people": [
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        }
      ]
    },
    {
      "group": "Staff",
      "people": [
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        },
        {
          "url": "#/people",
          "name": "Nucgaek Frabklin",
          "title": "directors",
          "image": "assets/images/people.jpg",
          "contact": [
            {"url": "", "fa": "envelope"},
            {"url": "", "fa": "home"},
            {"url": "", "fa": "book"}
          ]
        }
      ]
    }
  ];
});
