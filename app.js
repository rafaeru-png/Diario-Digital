// AngularJS Application
angular.module('radioApp', []).controller('radioController', function($scope) {
    $scope.comments = [];
    $scope.suggestions = [];
    $scope.suggestionSent = false;

    // Função para adicionar comentários
    $scope.addComment = function() {
        if ($scope.commentName && $scope.newComment) {
            $scope.comments.push({
                name: $scope.commentName,
                text: $scope.newComment
            });
            $scope.commentName = '';
            $scope.newComment = '';
        }
    };

    // Função para adicionar sugestões (uma vez por usuário)
    $scope.addSuggestion = function() {
        if ($scope.newSuggestion && !$scope.suggestionSent) {
            $scope.suggestions.push($scope.newSuggestion);
            $scope.newSuggestion = '';
            $scope.suggestionSent = true;
        }
    };
});
