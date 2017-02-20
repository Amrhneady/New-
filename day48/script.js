var app = angular.module("myApp", []);
app.service("todo", function ($http) {
    this.getData = function () {
        return $http.get("http://api.vschool.io:6543/hitlist.json");
    }
});
app.controller("Ctrl", function ($scope, todo) {
    $scope.loadData = function () {
        todo.getData().then(function (response) {
            $scope.data = response.data;
        }, function (response) {
            alert("error" + response.statusText)
        })
    }
});