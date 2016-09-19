angular.module("checklist").directive("imaginieTable", ['productsService', function(productsService) {
    return {
        restrict: "E",
        templateUrl: "imaginie-table.html",
        replace: true,
        controller: function ($attrs, $scope, $filter) {
            productsService.loadProducts($attrs.url).then(function(res){
                $scope.todos = res.data;
                $scope.getNotDone();
            });

            $scope.notDone = "0 Itens";
            
            $scope.getNotDone = function() {
                var notDone = 0;
                for (var i = 0; i < $scope.todos.length; i++) {
                    if(!$scope.todos[i].done){notDone++;}
                }
                $scope.notDone = notDone == 1 ? notDone + " Item" : notDone + " Itens";
            };

            $scope.reverseSort = true;

            $scope.sort = function(field) {
                $scope.reverseSort = !$scope.reverseSort;
                $scope.todos = $filter('orderBy')($scope.todos, field, $scope.reverseSort, false);
            };
        }
    };
}]);