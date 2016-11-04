app.controller('loading2Controller', function ($interval, $timeout, $location) {
    var vm = this;
    
    vm.completeLoading = function() {
        $location.path('/done');
    }

    var timer = $timeout( function(){ vm.completeLoading(); }, 60000);
    
    $scope.$on("$destroy", function() {
        if (timer) {
            $timeout.cancel(timer);
        }
    });
});