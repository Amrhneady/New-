var app = angular.module("homeModule", ["ngRoute", "issueModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home/", {
        templateUrl: "/view/home/home.html",
        controller: "homeCtrl"
    })
});

app.controller("homeCtrl", function ($scope, issueService, $routeParams) {
    
    //to show the title , desc and edit button
    $scope.showTitle = [];
    $scope.showDesc = [];
    $scope.editBtn = [];
    
    //to load data
    $scope.loadData = function () {
        issueService.getData().then(function (response) {
            $scope.list = response.data.data;
            for (var i = 0; i < $scope.list.length; i++) {
                $scope.showTitle[i] = true;
                $scope.showDesc[i] = true;
                $scope.editBtn[i] = true;
            };
        }, function (response) {
            console.log(response.status);
        });
    };

    //to increase the number of upvotes
    $scope.upvote = function (id, upVote, total) {
        upVote++;
        total++;
        var data = {
            upvote: upVote,
            totalVote: total
        }
        issueService.updateData(id, data).then($scope.loadData);
    };

    //to increase the number of downvotes
    $scope.downvote = function (id, downVote, total) {
        downVote++;
        total++;
        var data = {
            downvote: downVote,
            totalVote: total
        }
        issueService.updateData(id, data).then($scope.loadData);
    };

    //to delete an issue
    $scope.delIssue = function (id) {
        issueService.deleteData(id).then($scope.loadData)
    }
    
    //to show or hide input fields
    $scope.titleInput = [];
    $scope.okBtn = [];
    $scope.descInput = [];
    
    //edit
    $scope.showEdit = function (index) {
        $scope.showTitle[index] = !$scope.showTitle[index];
        $scope.showDesc[index] = !$scope.showDesc[index];
        $scope.editBtn[index] = !$scope.editBtn[index];
        $scope.titleInput[index] = !$scope.titleInput[index];
        $scope.descInput[index] = !$scope.descInput[index];
        $scope.okBtn[index] = !$scope.okBtn[index];
    }
    
    //to confirm update
    $scope.updateIssue = function (index, id, title, desc) {
        var data = {
            title: title,
            description: desc
        }
        issueService.updateData(id, data).then($scope.loadData);
        $scope.showTitle[index] = !$scope.showTitle[index];
        $scope.showDesc[index] = !$scope.showDesc[index];
        $scope.editBtn[index] = !$scope.editBtn[index];
        $scope.titleInput[index] = !$scope.titleInput[index];
        $scope.descInput[index] = !$scope.descInput[index];
        $scope.okBtn[index] = !$scope.okBtn[index];
    }

    //delete comments
    $scope.delComment = function (id, index) {
        issueService.deleteComment(id, index).then($scope.loadData)
    }
    
    //add new issue
    $scope.newIssue = function (title, desc) {
        var data = {
            title: title,
            description: desc,
            upvote: 0,
            downvote: 0,
            totalVote: 0
        }
        console.log(data)
        issueService.addData(data).then($scope.loadData);
        $scope.title = "";
        $scope.desc = "";
    }
})

   