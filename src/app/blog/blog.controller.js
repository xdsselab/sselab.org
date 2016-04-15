'use strict';

angular.module("sselabWebApp").controller("BlogCtrl", function ($scope, $routeParams, $http, $sce) {
  // view blog detail
  var blogTitle = $routeParams.title;
  $scope.isDetail = !!blogTitle;

  // filter by tag
  var blogTag = $routeParams.tag;

  // pagination
  var limit = 10;
  var currentPage = $routeParams.currentPage || 1;

  var blogs = [
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-10", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["spark"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-13", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["spark", "hadoop"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-15", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["hive"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-09", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["mysql", "hbase"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-14", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["d3"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-14", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["zeppelin"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-14", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["flume"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-14", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["hive"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-14", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["logs"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-09", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["mysql", "hbase"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-14", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["d3"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-14", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["zeppelin"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-14", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["flume"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-14", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["hive"]},
    {"title": "blog template demo", "author": "x-web", "date": "2016-04-14", "digest": "This is a simple blog demo by angular-sap(static).", "tags": ["logs"]}
  ];

  // tags
  $scope.blogTags = {};
  for (var i = 0; i < blogs.length; i++) {
    for (var j = 0; j < blogs[i].tags.length; j++) {
      var tag = blogs[i].tags[j];
      if (typeof $scope.blogTags[tag] === 'undefined') {
        $scope.blogTags[tag] = tag;
      }
    }
  }

  // filter by tag
  $scope.blogs = [];
  for (var i = 0; i < blogs.length; i++) {
    if (!blogTag || blogs[i].tags.join('-').indexOf(blogTag) > -1) {
      $scope.blogs.push(blogs[i]);
    }
  }
  $scope.currentTag = blogTag || "all";

  // sorted by date
  $scope.blogs.sort(function (a, b) {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    } else {
      return 0;
    }
  });

  // pagination
  var pages = Math.ceil($scope.blogs.length / limit);
  var start = (currentPage - 1) * limit;
  var end = start + limit;
  $scope.blogs = $scope.blogs.slice(start, end);
  $scope.pages = [];
  for (var i = 0; i < pages; i++) {
    $scope.pages.push(i);
  }
  $scope.currentPage = currentPage;

  // blog detail
  if ($scope.isDetail) {
    $scope.blogData = {"title": "Not Found!", "date": "1970-01-01", "author": "none"};
    for (var i = 0; i < $scope.blogs.length; i++) {
      if (blogTitle.substr(11) === $scope.blogs[i].title.trim().toLowerCase().replace(/[ ]+/g, '-')) {
        $scope.blogData = $scope.blogs[i];
        $http.get("data/blog/" + blogTitle + ".md").success(function (d) {
          $scope.blogData.content = $sce.trustAsHtml(marked(d));

          $scope.$watch("viewContentLoaded", function() {
            $('pre code').each(function(i, block) {
              hljs.highlightBlock(block);
            });
          });
        }).error(function () {
          console.warn(blogTitle + " not existed!");
          $scope.blogData.content = $sce.trustAsHtml("<h2>No such file found.</h2>");
        });
      }
    }
  }

}).filter("blogNameGenerator", function() {
  return function(title) {
    return title.trim().toLowerCase().replace(/[ ]+/g, "-");
  };
});
