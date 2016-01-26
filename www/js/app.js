// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.config'])

.run(function($ionicPlatform, $location, DB) {
  $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
         // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
         // for form inputs)
         cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

         // Don't remove this line unless you know what you are doing. It stops the viewport
         // from snapping when text inputs are focused. Ionic handles this internally for
         // a much nicer keyboard experience.
         cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
         StatusBar.styleDefault();
      }
      if(!DB.production){
         DB.init();    
    
         $location.path('/app/home');    
         console.log('teste');
      }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.local', {
      url: "/local",
      views: {
        'menuContent' :{
          templateUrl: "templates/local.html",
         controller: 'LocalCtrl'
        }
      }
    })

    .state('app.natureza', {
      url: "/natureza",
      views: {
        'menuContent' :{
          templateUrl: "templates/natureza.html"
        }
      }
    })	

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })

	.state('app.about', {
		url: '/about',
		views: {
			'menuContent' : {
				templateUrl: 'templates/about.html',
				controller: 'AboutCtrl'
			}
		}
	});
});