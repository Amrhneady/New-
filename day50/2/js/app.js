var app = angular.module("myApp",["storge"])
app.controller("myCtrl", function($scope,storge){
    $scope.items = storge.items;
    $scope.add = function(){
        storge.add({
            title: $scope.title,
            url: $scope.url,
            des: $scope.des,
        })
      $scope.items = storge.items;  
    }
});
