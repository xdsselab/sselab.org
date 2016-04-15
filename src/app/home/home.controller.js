'use strict';

angular.module("sselabWebApp").controller("HomeCtrl", function ($scope, $http) {

  $scope.$watch("viewContentLoaded", function() {
    // console.log("view content loaded");
    angular.element('#da-slider').cslider({
      autoplay : true,
      bgincrement : 450
    });

    angular.element("#owl-demo").owlCarousel({
      items : 4,
      lazyLoad : true,
      autoPlay : true,
      navigation : true,
      navigationText : ["", ""],
      rewindNav : false,
      scrollPerPage : false,
      pagination : false,
      paginationNumbers : false,
    });
  });
  
});
