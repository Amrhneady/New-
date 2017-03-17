var app = angular.module("homeModule", ["ngRoute", "issueModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home/", {
        templateUrl: "/views/home/home.html",
        controller: "homeCtrl"
    })
});