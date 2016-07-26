(function(){
	'use strict';
	angular.module('myApp',['ui.router','ngMaterial'])
	.config(['$stateProvider', '$urlRouterProvider','$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
		var appAccent = $mdThemingProvider.extendPalette('orange', {
			'A200': 'F5901D',
			'contrastDefaultColor': 'light'
		});
		$mdThemingProvider.definePalette('app-primary', {
			'50': 'dff3f2',
			'100': 'b2e3e0',
			'200': '83d2cd',
			'300': '51bfb7',
			'400': '30b1a8',
			'500': '18a399',
			'600': '14948c',
			'700': '11857d',
			'800': '0d736c',
			'900': '06544f',
			'A100': 'A7FFEB',
			'A200': '64FFDA',
			'A400': '1DE9B6',
			'A700': '00BFA5',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
			'contrastLightColors': undefined
		});
		$mdThemingProvider.definePalette('app-accent', appAccent);
		$mdThemingProvider.theme('default')
			.primaryPalette('app-primary')
			.accentPalette('app-accent');
		$stateProvider
		.state('main',{
			views:{
				'@':{
					templateUrl: 'modules/wrapper/layout.html'
				},
				'top@main':{
					templateUrl: 'modules/wrapper/menu.html',
					controller: 'MainController',
					controllerAs: 'vm'
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
