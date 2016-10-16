app.controller('loading2Controller', function ($interval, $timeout, $location) {
    var vm = this;
    
    vm.completeLoading = function() {
        $location.path('/done');
    }

    $timeout( function(){ vm.completeLoading(); }, 6000);
});