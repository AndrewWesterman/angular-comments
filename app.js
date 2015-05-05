var app = angular.module("Comments", []);

app.controller("CommentsCtrl", function($scope){
    $scope.commentInput = "";

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

    $scope.addCommentFromInputBox = function(e){
        if(e.which && e.which === 13){
            $scope.comments.push($scope.commentInput);
            $scope.commentInput = "";
        }
    };
});