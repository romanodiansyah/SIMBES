(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.register-v2')
        .controller('RegisterV2Controller', RegisterV2Controller);

    /** @ngInject */
    function RegisterV2Controller($state, $stateParams, $http, api, $scope)
    {
        var vm = this;

        // Data
        vm.register = register;
        vm.dataRegister = $stateParams.Data;
        vm.submitted = false;
        console.log('Data register: ', vm.dataRegister);

        // $localStorage.formRegister = $localStorage.formRegister ? $localStorage.formRegister : {};
        // vm.form = $localStorage.formRegister;

        
        // Methods
        function register()
        {
            // let headers = new Http();
            // headers.append('Content-Type', 'application/json');
            // headers.append('Accept', 'application/json');
            
            vm.submitted = true
            console.log(vm.form)
            $http.post(api.baseUrl+ 'auth/admin/register', vm.form).then(function (response){
                console.log('register', response);
                // $localStorage.user = response.data
                // $localStorage.token = response.meta.token
                // console.log(window.localStorage);
                $state.go('app.pages_auth_login-v2');
                // window.location.href = '/../../dashboard-project'
                vm.submitted = false;
                
            }, function(response){
                console.log(response);
                alert(response.data.message);
                $state.go('app.pages_auth_register-v2');
                vm.submitted = false;
            });
        }

        //////////
    }

    

})();