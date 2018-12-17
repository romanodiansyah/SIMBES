(function ()
{
    'use strict';

    angular
        .module('app.user-database.mahasiswa')
        .controller('TambahMahasiswaController', TambahMahasiswaController);

    /** @ngInject */
    function TambahMahasiswaController($scope, $document, $state, $localStorage, api, $http)
    {
        var vm = this;
        vm.submitted = false;
        vm.jenis_kelamin_int = 0;
        vm.student = $localStorage.student;
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
        vm.isFormValid = isFormValid;
        vm.gotoStudents = gotoStudents;
        vm.saveStudent = saveStudent;

        //////////
        function gotoStudents()
        {
            $http.get(api.baseUrl + 'admin/list/student').then(function (response){
                vm.students = response.data.data;
                console.log('Data Mahasiswa:', vm.students);
    
            }, function (response){
                console.log('Data failed:', response)
                alert(response.data.message)
            });
            $state.go('app.user-database_mahasiswa_list-mahasiswa');
        }

        function saveStudent(data){
           if (data)
            {
                //MahasiswaService.updateProduct(vm.product.id, vm.product);
            }
            else
            {
                $http.post(api.baseUrl+ 'admin/create/student', vm.student).then(function (response){
                    console.log('student', response);
                    $localStorage.user = response.data
                    console.log(window.localStorage);
                    // $state.go('app.dashboards.project');
                    window.location.href = '/list-mahasiswa'
                    vm.submitted = true;
                    
                    }, function(response){
                        console.log(response);
                        alert(response.data.message);
                        vm.submitted = false;
                        $state.go('app.user-database_mahasiswa_list-mahasiswa.add');
                    });
            }
        }
        /**
         * Save product
         */
        // function saveProduct()
        // {
        //     // Since we have two-way binding in place, we don't really need
        //     // this function to update the products array in the demo.
        //     // But in real world, you would need this function to trigger
        //     // an API call to update your database.
        //     if ( vm.product.id )
        //     {
        //         MahasiswaService.updateProduct(vm.product.id, vm.product);
        //     }
        //     else
        //     {
        //         MahasiswaService.createProduct(vm.product);
        //     }

        // }

        /**
         * Go to products page
         */
        // function gotoProducts()
        // {
        //     $state.go('app.user-database_mahasiswa_list-mahasiswa');
        // }


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