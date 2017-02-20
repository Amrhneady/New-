var app = angular.module("football.liveScore", ["ngRoute", "footballModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/liveScore", {
        templateUrl: "./js/views/liveScore/liveScore.tpl.html",
        controller: "liveScoreCtrl"
    })
})
app.controller("liveScoreCtrl", function ($scope, footballService) {
    $scope.load = function () {
        footballService.getData().then(function (response) {
            $scope.match = response.data[5].league
        }, function(response) {
            console.log(response.status)
        })
    }
})