var app = angular.module("myApp,[]");
app.service("red", function () {
    this.redValue = 100;
    this.blueValue = 100;
    this.RedAdd = function (redValue,blueValue){
        this.redValue = redValue + 1;
        this.redValue = redValue + 1;
    }

});
app.service("blue", function () {
    this.redValue = 100;
    this.blueValue = 100;
    this.BlueAdd = function (redValue,blueValue){
        this.redValue = redValue + 1;
        this.redValue = redValue + 1;
    }

});
app.controller("ctrl", function($scope, red, blue){
    $scope.redIncrement = red.redValue;
    $scope.redIncrement = red.redValue;
    
})