var app = angular.module("oneIssueModule", ["ngRoute", "issueModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/oneIssue/:id", {
        templateUrl: "/view/oneIssue/oneIssue.html",
        controller: "oneIssueCtrl"
    })
});
app.controller("oneIssueCtrl", function ($scope, $routeParams, issueService) {
    
    //to show the title , desc and edit button
    $scope.showTitle = true;
    $scope.showDesc = true;
    $scope.editBtn = true;
    
    //to load data
    $scope.loadData = function () {
        issueService.getDataById($routeParams.id).then(function (response) {
            $scope.issue = response.data.data;
            //to only show like buttons and comment when there is data
            if($scope.issue != undefined) {
                $scope.showIssue = true;
            }
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

    //to show comments
    $scope.commentsBtn = function () {
        $scope.showComments = !$scope.showComments;
    };

    //to add new comment
    $scope.addComment = function (id, comment) {
        var data = {
            comments: comment
        }
        issueService.updateData(id, data).then($scope.loadData);
        $scope.newComment = "";
    };

    //to delete an issue
    $scope.delIssue = function (id) {
        issueService.deleteData(id).then($scope.loadData)
    }

    //edit
    $scope.showEdit = function (index) {
        $scope.showTitle = !$scope.showTitle;
        $scope.showDesc = !$scope.showDesc;
        $scope.editBtn = !$scope.editBtn;
        $scope.titleInput = !$scope.titleInput;
        $scope.descInput = !$scope.descInput;
        $scope.okBtn = !$scope.okBtn;
    }
    
    //to confirm update
    $scope.updateIssue = function (id, title, desc) {
        
        var data = {
            title: title,
            description: desc
        }
        issueService.updateData(id, data).then($scope.loadData);
        
        $scope.showTitle = !$scope.showTitle;
        $scope.showDesc = !$scope.showDesc;
        $scope.editBtn = !$scope.editBtn;
        $scope.titleInput = !$scope.titleInput;
        $scope.descInput = !$scope.descInput;
        $scope.okBtn = !$scope.okBtn;
        
    }

    //delete comments
    $scope.delComment = function (id, index) {
        issueService.deleteComment(id, index).then($scope.loadData)
    }
})