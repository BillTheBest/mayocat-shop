'use strict'

angular.module('articles', [])

    .controller('ArticlesController', ['$scope', '$resource',
    function ($scope, $resource) {

        $scope.refreshArticles = function() {
            $resource("/api/1.0/news").get({}, function (articles){
                $scope.articles = articles.items;
            });
        }

        $scope.$on("news:articles:refreshList", function() {
            $scope.refreshArticles();
        });

        $scope.refreshArticles();

    }]);
