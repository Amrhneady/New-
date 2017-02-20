var app = angular.module("app.whyilove", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/whyilove", {
    templateUrl: "./view/whyilove/whyilove.app.js",
    controller: "whyiloveCtrl"
  });
});

app.controller("whyiloveCtrl", function($scope) {
});