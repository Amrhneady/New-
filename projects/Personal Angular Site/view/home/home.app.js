var app = angular.module("app.home", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "./view/home/home.html",
    controller: "homeCtrl"
  });
});
app.controller("homeCtrl", function($scope, $http) {
    $http.get("http://imdb.wemakesites.net/api")
    .then(function(response) {
        //First function handles success
        $scope.content = response.data;
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
    });