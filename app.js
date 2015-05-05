var app = angular.module("Comments", []);

app.controller("CommentsCtrl", function($scope){
    $scope.newComment = "";

    $scope.comments = [
        "I am awesome",
        "ayy lmao",
        "the weather is amazing!"
    ];

    $scope.remove = function(comment){
        var indexOf = $scope.comments.indexOf(comment);
        if(indexOf !== -1){
            $scope.comments.splice(indexOf, 1);
        }
    };

    $scope.add = function(e){
        if(e.which && e.which === 13){
            $scope.comments.push($scope.newComment);
            $scope.newComment = "";
        }
    };
});