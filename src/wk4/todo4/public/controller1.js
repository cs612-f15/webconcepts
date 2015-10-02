(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('controller1', controller1);

    controller1.$inject = ['$location']; 

    function controller1($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'controller1';
        
        $scope.greeting = 'hello there...';

        activate();

        function activate() { }
    }
})();
