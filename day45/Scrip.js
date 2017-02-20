var app = angular.module("myApp", []);
app.service("nameService", function () {
    this.names = [];
    this.submit = function (name) {
        this.names.push(name);
    }
    this.remove = function (index) {
        this.names.splice(index, 1);
    }
})
app.controller("mainCtrl", function ($scope, nameService) {
    $scope.names = nameService.names;
    $scope.submit = function () {
        nameService.submit($scope.name);
        $scope.names = nameService.names;
        $scope.name = "";
    }
    $scope.remove = function (index) {
        nameService.remove(index);
        $scope.names = nameService.names;
    }
    $scope.clear = Function(name){
        nameService.remove()
    }
})