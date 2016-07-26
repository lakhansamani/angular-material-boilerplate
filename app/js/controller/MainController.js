(function(){
    'use strict';
    angular.module('myApp')
    .controller('MainController',['$scope','$mdSidenav','$timeout',MainController]);
    function MainController($scope,$mdSidenav,$timeout){
        var vm = this;
        vm.toggleRight = buildToggler('right');
        //function to know if menu is open or not;
        vm.isOpenRight = function(){
            return $mdSidenav('right').isOpen();
        };

        //function handle toggle of right navbar
        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID)
                .toggle()
                .then(function(){
                    console.log('toggling sidebar ...');
                });
            };
        }

    }
})();
