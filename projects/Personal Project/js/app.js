var app = angular.module("football", ["ngRoute","football.liveScore"]);
app.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo : "/liveScore"
    }).otherwise({
        redirectTo : "/liveScore"
    })
})