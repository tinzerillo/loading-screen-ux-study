app.controller('loading1Controller', function ($interval, $timeout, $location, $scope) {
    var vm = this;
    
    vm.counter = 0;
    
    vm.completeLoading = function() {
        $location.path('/success');
    }

    var timer = $timeout( function(){ vm.completeLoading(); }, 60000);
    
    vm.incrementLoadingBar = function() {
        vm.counter = vm.counter + .84;
    }
    
    var loadingBarCounter = $interval(vm.incrementLoadingBar, 500);

	$scope.$on("$destroy", function() {
        if (loadingBarCounter) {
            $interval.cancel(loadingBarCounter);
        }
        if (timer) {
            $timeout.cancel(timer);
        }
    });
});

