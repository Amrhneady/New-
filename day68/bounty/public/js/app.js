var app = angular.module("myApp", []);

app.service("myService", function(){
    this.getData = function(){
        return $http.get("http://localhost:8080/bounty/")
    }
})
app.controller("myCtrl", function($scope,myService ){
    $scope.getData
    $scope.add
    $scope.del
})