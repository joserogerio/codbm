angular.module('starter.services', ['starter.config'])

	.factory('APP', function($q, $ionicPopup, $filter){
		var self = this;
		self.name= "CODBM";
      self.url= "http://alturarunning.pe.hu";
      
      self.showAlert = function(message) {
			 var alertPopup = $ionicPopup.alert({
			   title: self.name,
			   template: message
			 });
			 alertPopup.then(function(res) {
			   //console.log('Thank you for not eating my delicious ice cream cone');
			 });
	   };
				
        
		return self;
	})

	
	.factory('DB', function($q, DB_CONFIG, APP, TmpService) {
		var self = this;
		self.db = null;
		self.production = false;
		self.version;
      
		self.init = function() {
			// Use 
         if( self.production){
				self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name}); //in production
         }
			else{
				self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1);
            APP.url= "http://localhost/alturaRunningSite/";
         }
	 
         self.createDB();
			
         self.populate(DB_CONFIG.inserts);
         
         //TMP
         TmpService.generateHash(10);
         
         //Get version
         sql= "SELECT version FROM configuration";
         self.version= "201601301425";
         /*self.query(sql).then(function(result){
            return self.fetch(result);
         });*/
		};
	 
      self.createDB = function(){
			angular.forEach(DB_CONFIG.tables, function(table) {
				var columns = [];
	 
				angular.forEach(table.columns, function(column) {
					columns.push(column.name + ' ' + column.type);
				});
	 
				var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
				self.query(query);
			});         
      };
    
      self.populate = function(queries){
         var query = "SELECT COUNT(*) AS quant FROM type ";
         
         self.query(query).then(function(result){
            var quant = self.fetch(result).quant;
            if( quant < 1){
               angular.forEach(queries, function(item) {
                    // self.query(item.value);
                  });            
            }
         });
      };
      
		self.query = function(query, bindings) {
			bindings = typeof bindings !== 'undefined' ? bindings : [];
			var deferred = $q.defer();
	 
			self.db.transaction(function(transaction) {
				transaction.executeSql(query, bindings, function(transaction, result) {
					deferred.resolve(result);
				}, function(transaction, error) {
					APP.showAlert(error.message+" "+query);
					deferred.reject(error);
				});
			});
	 
			return deferred.promise;
		};

		self.fetchAll = function(result) {
			var output = [];
	 
			for (var i = 0; i < result.rows.length; i++) {
				output.push(result.rows.item(i));
			}
			
			return output;
		};
	 
		self.fetch = function(result) {
			return result.rows.item(0);
		};
	 
		self.getNumberRows= function(result){
			return result.rows.length;
		}
		
		return self;
	})


	.factory('LocalService', function($http, DB, APP){
		var self = this;
		
		self.all = function() {
         var output = [];
			/*var sql = "SELECT * "+
			          "FROM local ";	
			return DB.query(sql)
			.then(function(result){
				return DB.fetchAll(result);
			});*/
         for(i=1; i <= 10; i++){
            for(j=1; j <= 10; j++){
               var local= {};
               local.id= i * 10000;
               local.name= "local_"+i+""+(j-1);
               local.code= i+""+j+ (j*1000);
               local.type_id= i;
               output.push(local);               
            }
         }
         return output;
		};
		
		self.getById = function(id, all_fields) {
			//bindings = typeof bindings !== 'undefined' ? bindings : [];
			all_fields = typeof all_fields !== 'undefined' ? all_fields : false;
			
			var sql = "";
			if( all_fields)
				sql = "SELECT * ";
			else 
				sql = "SELECT id, name ";
					  
			sql+= "FROM local "+
				  "WHERE id = ? ";
			return DB.query(sql, [id])
			.then(function(result){
				return DB.fetch(result);
			});
		};

		self.getByTypeId = function(id, all_fields){
			/*all_fields = typeof all_fields !== 'undefined' ? all_fields : false;
			
			
			var sql = "";
			if( all_fields)
				sql = "SELECT * ";
			else 
				sql = "SELECT id, name ";
					  
			sql+= "FROM local "+
				  "WHERE type_id = ? ";
			return DB.query(sql, [type_id])
			.then(function(result){
				return DB.fetch(result);
			});         */
         var output = [];
         for(i=1; i < 10; i++){
            var local = {};
            local.id = i * 1000;
            local.name= "local_"+id+""+(i-1);
            local.code= id+""+(i-1) * (1000);
            local.type_id= i;
            output.push(local);            
         }
         return output
      }
      		
		return self;
	})
   
   
   .factory('TypeService', function(DB, APP){
      var self= this;
      
      self.all= function(){
         var output = [];
			/*var sql = "SELECT * "+
			          "FROM type ";	
			return DB.query(sql)
			.then(function(result){
				return DB.fetchAll(result);
			});*/
         for(i=1; i <= 10; i++){
            var type= {};
            type.id= i;
            type.name= "type_"+i;
            type.code= i * 1000;
            output.push(type);
         }
         return output;         
      }
      
      return self;
   })
   
   
   .factory('TmpService', function(){
      var self = this;
      
      self.generateHash = function(quant){
         var hash;
         var i;
         for( i=0; i < quant; i++){
            hash  = new Date().getTime();
            console.log(hash);        
         }
         
      }
      
      return self;
   })
   
   .factory('UpdateService', function(DB, APP){
      var self = this;
      var queries= [];  
      
      self.verifyNewVersion= function(){
         var my_url = APP.url+"/webservice_codbm.php";
         var item = {};
         item.function = 'verifyNewVersion';         
         $.ajaxSetup({
            beforeSend: function(xhr) {
               xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            }
         });

         $.ajax({
            url: my_url,
            type: 'POST',
            data: item,
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "localJsonpCallback",
            success: function (data) {
               console.log(JSON.stringify(data));
               
               var version_web;

               for(var i = 0; i < data.length; i++)
               {
                  version_web = data[i].version;

                  //window.localStorage.setItem("version",JSON.stringify(version));
                  return version_web;
               }
                     
            },
            error: function (xhr, ajaxOptions, thrownError) {
               console.log('on error!');
               console.log("xhr.status: " + xhr.status);
               console.log("xhr.statusText: " + xhr.statusText);
               console.log("xhr.readyState: " + xhr.readyState);
               console.log("xhr.redirect: " + xhr.redirect);
               return 0;
            }
         });         
      }
        
      
      self.update= function(){
         var my_url = APP.url+"/webservice_codbm.php";
         var item = {};
         item.function = 'getQueries';         
      
         $.ajaxSetup({
            beforeSend: function(xhr) {
               xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            }
         });

         $.ajax({
            url: my_url,
            type: 'POST',
            data: item,
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "localJsonpCallback",
            success: function (data) {
               for(var i = 0; i < data.length; i++)
               {        
                  if( data[i].version > DB.version)
                  {
                     //DB.query(query.sql);
                     console.log(data[i].sql);
                     
                     sql= "UPDATE configuration SET version = '"+data[i].version+"'; ";
                     //DB.query(sql);
                     console.log(sql);
                  }                  
               }   
            },
            error: function (xhr, ajaxOptions, thrownError) {
               APP.showAlert("Erro ao baixar atualizações!");
            }
         });         
      }
      
      return this;
   });