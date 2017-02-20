var app = angular.module("myApp", ["storge"]);
app.controller("myCtrl",function ($scope,storge) {
            $scope.total = storge.total;
            $scope.itemInsTOR = storge.items;
            $scope.addItem = function () {
                storge.add({
                    name: $scope.name,
                    cost: $scope.cost,
                })
                $scope.total = storge.total;
            }
        });
 