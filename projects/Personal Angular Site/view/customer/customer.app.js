var app = angular.module("app.about", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/about", {
    templateUrl: "./views/About/about.app.html",
    controller: "aboutCtrl"
  });
});

app.controller("aboutCtrl", function($scope) {
    $scope.submitted = false;
    $scope.showinfo=function(){
        $scope.submitted = true;
    }
});
require(["esri/Map", "esri/views/MapView", "dojo/domReady!"], function(Map, MapView) {
  // Create a Map instance
  var myMap = new Map({
    basemap: 'streets'
  });
  // Create a MapView instance (for 2D viewing) and reference the map instance
  var view = new MapView({
    map: myMap
  });
});