angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, APP) {

  $scope.closeApp= function() {
    //$scope.modal.hide();
	navigator.app.exitApp();
  };   
})


.controller('LocalCtrl', function($scope, APP, TypeService, LocalService){
    $scope.locais = [];
    $scope.local = null;
    $scope.types = [];
    $scope.type_id = null;
	
   LocalService.all().then(function(locais){
       $scope.locais= locais;
    });
    
   TypeService.all().then(function(types){
      $scope.types= types;
   });  
    
   $scope.selectType= function(){
      LocalService.getByTypeId($scope.type_id).then(function(locais){
         $scope.locais= locais;
      });
      $scope.local= null;
   }
})

.controller('NaturezaCtrl', function($scope, APP, GrupoService, SubGrupoService, NaturezaService){
    $scope.naturezas = [];
    $scope.natureza = null;
	$scope.subgrupos = [];
	$scope.subgrupo_id = null;
	$scope.grupos = [];
	$scope.grupo_id = null;
	
    GrupoService.all().then(function(grupos){
       $scope.grupos= grupos;
    });
	
/*	SubGrupoService.all().then(function(subgrupos){
		$scope.subgrupos= subgrupos;
	});
	
	NaturezaService.all().then(function(naturezas){
		$scope.naturezas= naturezas;
	});
	*/
   
	$scope.selectGrupo= function(){
		SubGrupoService.getBySubGrupoId($scope.grupo_id).then(function(subgrupos){
			$scope.subgrupos= subgrupos;
		});
		$scope.subgrupo_id= null;
      $scope.natureza= null;
	}

	$scope.selectSubGrupo= function(){
		NaturezaService.getByNaturezaId($scope.subgrupo_id).then(function(naturezas){
			$scope.naturezas= naturezas;
		});
		$scope.natureza_id= null;
      $scope.natureza= null;
	}
	
})


.controller('HomeCtrl', function($scope, APP) {
})


.controller('AboutCtrl', function($scope, $ionicPopup, APP, DB, UpdateService){
   $scope.verifyUpdate= function(){
      var version_web;
      UpdateService.verifyNewVersion();
      /*var version_app = DB.version;
      
      //console.log(DB.version);
      if( !version_web )
         APP.showAlert("Problemas ao verificar atualização!");
      else{
         if( version_app < version_web){
            update();
         }
         else
         {
            APP.showAlert("Não há atualizações!");
         }
      }*/
   }
   
   
   update = function(){
		var confirmPopup = $ionicPopup.confirm({
			title: APP.name,
			template: 'Há uma atualização disponível, deseja atualizar?'
		});
	   
		confirmPopup.then(function(res) {
			if(res) {
            UpdateService.update();
         }
      });         
   }
});