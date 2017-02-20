var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope) {
    $scope.list = [];
    $scope.submit = function () {
        $scope.list.push({
            title: $scope.title,
            desc: $scope.desc,
            img: $scope.img,

        })
        $scope.title = "";
        $scope.img = "";
        $scope.desc = "";
    }
});