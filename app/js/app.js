(function(){
	'use strict';
	angular.module('myApp',['ui.router','ngMaterial'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('main',{
			views:{
				'@':{
					templateUrl: 'modules/wrapper/layout.html'
				},
				'top@main':{
					templateUrl: 'modules/wrapper/menu.html',
				},
				'content@main':{
					templateUrl: 'modules/wrapper/wrap.html'
				}
			}

		})
		.state('main.home',{
			url:'/home',
			views:{
				'mainSection@main':{
					templateUrl : 'modules/home/home.html'
				}
			}
		});
		$urlRouterProvider.otherwise('/home');
	}]);

})();
