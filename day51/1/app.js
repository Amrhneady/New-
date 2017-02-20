var app = angular.module("app", ["ngRoute", "app.about", "app.home", "app.whyilove", "app.students"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when("/", {
    redirectTo: "/home"
  }).otherwise("/", {
    redirectTo: "/home"
  })
})