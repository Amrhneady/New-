var app = angular.module("addIssueModule", ["ngRoute", "issueModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/newIssue", {
        templateUrl: "/view/newIssue/newIssue.html",
        controller: "addIssueCtrl"
    })
});

app.controller("addIssueCtrl", function ($scope, issueService) {
    
    //add new issue
    $scope.newIssue = function () {
        var data = {
            title: $scope.title,
            description: $scope.desc,
            upvote: 0,
            downvote: 0,
            totalVote: 0
        }
        issueService.addData(data).then($scope.loadData);
        $scope.title = "";
        $scope.desc = "";
    }
})