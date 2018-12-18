(function ()
{
    'use strict';

    angular
        .module('app.pages.beasiswa')
        .controller('TambahBeasiswaController', TambahBeasiswaController);
    
    /** @ngInject */
    function TambahBeasiswaController($scope, $state, $http, $localStorage, api)
    {
        var vm = this;
        vm.submitted = false;
        vm.beasiswa = $localStorage.beasiswa;
        // $localStorage.formBeasiswa = $localStorage.formBeasiswa ? $localStorage.formBeasiswa : {};
        // vm.beasiswa = $localStorage.formBeasiswa;

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
        vm.saveBeasiswa = saveBeasiswa;
        vm.gotoBeasiswas = gotoBeasiswas;
        vm.isFormValid = isFormValid;
        
        //////////
        function saveBeasiswa(id){
            if ( id ){
                $http.post(api.baseUrl + 'admin/beasiswa/update/'+ id, vm.beasiswa).then(function(response){
                    console.log('beasiswa', response);
                    $localStorage.beasiswa = response.data
                    console.log(window.localStorage);
                    // $state.go('app.dashboards.project');
                    window.location.href = '/list-beasiswa'
                    vm.submitted = true;
                }, function(response){
                    console.log(response);
                    alert('Data tidak valid');
                    vm.submitted = false;
                });
            }
            else
            {
                $http.post(api.baseUrl+ 'admin/beasiswa/create', vm.beasiswa).then(function (response){
                    console.log('beasiswa', response);
                    $localStorage.beasiswa = response.data
                    console.log(window.localStorage);
                    // $state.go('app.dashboards.project');
                    window.location.href = '/list-beasiswa'
                    vm.submitted = true;
                    
                    }, function(response){
                        console.log(response);
                        alert(response.data.message);
                        vm.submitted = false;
                        $state.go('app.pages_beasiswa_list-beasiswa.add');
                    });
            }

        }

        /**
         * Go to products page
         */
        function gotoBeasiswas()
        {
            $state.go('app.pages_beasiswa_list-beasiswa');
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