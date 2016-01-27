angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, APP) {
})


.controller('LocalCtrl', function($scope, APP, TypeService, LocalService){
    $scope.locais = [];
    $scope.local = null;
    $scope.types = [];
    $scope.type_id = null;
	
    // Get all the exercises
    /*LocalService.all().then(function(list){
        $scope.locais = list;
    });*/
    $scope.locais= LocalService.all();
    $scope.types= TypeService.all();
    
    $scope.selectType= function(){
      $scope.locais= LocalService.getByTypeId($scope.type_id);
      //console.log($scope.type);
    }
})


.controller('HomeCtrl', function($scope, APP) {
})


.controller('AboutCtrl', function($scope, APP){
 
});