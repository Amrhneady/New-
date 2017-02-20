var app = angular.module("myApp", ["getPokemon"]);

app.controller('myCtrl', function ($scope,PokemonApi) {
    $scope.getPokemon = function () {
        PokemonApi.getdata($scope.number).then(function (response) {
            $scope.name = response.data.name;
        }, function (response) {
            alert(response.statusText)
        })
    };
});