angular.module("checklist").service("productsService", function($http) {
     this.loadProducts = function(url){
        return $http.get(url);
    };    
});