var app = angular.module("app.contact", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "./js/views/contact/contact.tpl.html",
    controller: "contactCtrl"
  });
});

app.controller("home", function($scope) {
});