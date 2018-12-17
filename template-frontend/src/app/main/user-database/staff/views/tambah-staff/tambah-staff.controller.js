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

        // Data
        vm.taToolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
        ];
        vm.product = Product;

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
            $http.get(api.baseUrl + 'admin/list/admin').then(function (response){
                vm.admins = response.data.data;
                console.log('Data Staff:', vm.admins);
    
            }, function (response){
                console.log('Data failed:', response)
                alert(response.data.message)
            });
            $state.go('app.user-database_staff_list-staff');
        }

        function saveAdmin(data)
        {
            console.log(vm.admin.jenis_kelamin)
            if (data)
            {
                //MahasiswaService.updateProduct(vm.product.id, vm.product);
            }
            else
            {
                if(vm.admin.jenis_kelamin=="Laki-laki"){
                    console.log(vm.admin.jenis_kelamin)
                    vm.jenis_kelamin_int = 1;
                    vm.admin.jenis_kelamin = 1;
                }else if(vm.admin.jenis_kelamin=="Perempuan"){
                    vm.jenis_kelamin_int = 2;
                    vm.admin.jenis_kelamin = 2;
                }
                $http.post(api.baseUrl+ 'admin/create/admin', vm.admin).then(function (response){
                    console.log('admin', response);
                    $localStorage.user = response.data
                    console.log(window.localStorage);
                    // $state.go('app.dashboards.project');
                    window.location.href = '/list-staff'
                    vm.submitted = true;
                    
                    }, function(response){
                        console.log(response);
                        alert(response.data.message);
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