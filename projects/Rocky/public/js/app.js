var app = angular.module("app", ["ngRoute","issueModule","homeModule", "addIssueModule", "oneIssueModule"]);
app.config(function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/home"
    }).otherwise({
        redirectTo: "/home"
    })
})
app.controller("ctrl", function ($scope, issueService) {
    //defining variables for the ng-show
    
})