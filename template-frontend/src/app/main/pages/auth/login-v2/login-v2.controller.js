(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login-v2')
        .controller('LoginV2Controller', LoginV2Controller);

    /** @ngInject */
    function LoginV2Controller($state, $stateParams, $http, api, $scope, $localStorage)
    {
        // Data
        var vm = this;

        vm.login = login;
        vm.dataLogin = $stateParams.Data;
        vm.submitted = false;
        console.log('Data login: ', vm.dataLogin);

        $localStorage.formLogin = $localStorage.formLogin ? $localStorage.formLogin : {};
        vm.form = $localStorage.formLogin;

        
        // Methods
        function login()
        {
            // let headers = new Http();
            // headers.append('Content-Type', 'application/json');
            // headers.append('Accept', 'application/json');
            
            vm.submitted = true
            console.log(vm.form)
            $http.post(api.baseUrl+ 'auth/admin/login', vm.form).then(function (response){
                console.log('login', response);
                $localStorage.user = response.data.data
                $localStorage.token = response.data.meta.token
                // console.log(window.localStorage);
                // $state.go('app.dashboards.project');
                window.location.href = '/dashboard-project'
                vm.submitted = false;
                
            }, function(response){
                console.log(response);
                alert(response.data.message);
                $state.go('app.pages.auth.login-v2');
                vm.submitted = false;
            });
        }
        //////////
    }
})();