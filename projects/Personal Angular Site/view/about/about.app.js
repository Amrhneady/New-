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