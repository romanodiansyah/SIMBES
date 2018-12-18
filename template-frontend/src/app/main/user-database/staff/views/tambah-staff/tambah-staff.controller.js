(function ()
{
    'use strict';

    angular
        .module('app.user-database.staff')
        .controller('TambahStaffController', TambahStaffController);

    /** @ngInject */
    function TambahStaffController($scope, $document, $state, $localStorage, api, $http)
    {
        var vm = this;
        vm.submitted = false;
        vm.jenis_kelamin_int = 0;
        vm.admin = $localStorage.admin;

        // Data
        vm.taToolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
        ];

        vm.ngFlowOptions = {
            // You can configure the ngFlow from here
            /*target                   : 'api/media/image',
             chunkSize                : 15 * 1024 * 1024,
             maxChunkRetries          : 1,
             simultaneousUploads      : 1,
             testChunks               : false,
             progressCallbacksInterval: 1000*/
        };
        vm.ngFlow = {
            // ng-flow will be injected into here through its directive
            flow: {}
        };

        // Methods
        vm.saveAdmin = saveAdmin;
        vm.gotoAdmins = gotoAdmins;
        vm.isFormValid = isFormValid;

        //////////

        /**
         * Go to products page
         */
        function gotoAdmins()
        {
            $http.get(api.baseUrl + 'admins').then(function (response){
                vm.admins = response.data.data;
                console.log('Data Staff:', vm.admins);    
            }, function (response){
                console.log('Data failed:', response)
                alert(response.data.message)
            });
            $state.go('app.user-database_staff_list-staff');
        }

        function saveAdmin(id)
        {
            if (id)
            {
                vm.loadingStatus = true;
                $http.put(api.baseUrl+ 'admin/update/' + id, vm.admin).then(function (response){
                    console.log('admin', response);
                    $localStorage.admin = response.data;
                    console.log(window.localStorage);
                    // $state.go('app.dashboards.project');
                    window.location.href = '/list-staff';
                    vm.submitted = true;
                    
                    }, function(response){
                        console.log(response);
                        alert('Data tidak valid');
                        vm.submitted = false;
                        $state.go('app.user-database_staff_list-staff.detail');
                });
            }
            else
            {
                $http.post(api.baseUrl+ 'auth/admin/register', vm.admin).then(function (response){
                    console.log('admin', response);
                    $localStorage.admin = response.data;
                    console.log(window.localStorage);
                    // $state.go('app.dashboards.project');
                    window.location.href = '/list-staff';
                    vm.submitted = true;
                    
                    }, function(response){
                        console.log(response);
                        alert('Data tidak valid')
                        vm.submitted = false;
                        $state.go('app.user-database_staff_list-staff.add');
                    });
            }
        }

        /**
         * Checks if the given form valid
         *
         * @param formName
         */
        function isFormValid(formName)
        {
            if ( $scope[formName] && $scope[formName].$valid )
            {
                return $scope[formName].$valid;
            }
        }
    }
})();