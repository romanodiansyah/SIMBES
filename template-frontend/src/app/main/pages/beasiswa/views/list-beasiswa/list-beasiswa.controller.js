(function ()
{
    'use strict';

    angular
        .module('app.pages.beasiswa')
        .controller('ListBeasiswaController', ListBeasiswaController);

    /** @ngInject */
    function ListBeasiswaController($state, $scope, api, $http, $localStorage)
    {
        var vm = this;

        // Data
        
        vm.dtInstance = {};
        vm.dtOptions = {
            dom         : 'rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            columnDefs  : [
                {
                    // Target the id column
                    targets: 0,
                    width  : '72px'
                },
                {
                    // Target the actions column
                    targets           : 8,
                    responsivePriority: 1,
                    filterable        : false,
                    sortable          : false
                }
            ],
            initComplete: function ()
            {
                var api = this.api(),
                    searchBox = angular.element('body').find('#e-commerce-products-search');

                // Bind an external input as a table wide search box
                if ( searchBox.length > 0 )
                {
                    searchBox.on('keyup', function (event)
                    {
                        api.search(event.target.value).draw();
                    });
                }
            },
            pagingType  : 'simple',
            lengthMenu  : [10, 20, 30, 50, 100],
            pageLength  : 20,
            scrollY     : 'auto',
            responsive  : true
        };

        // Methods
        vm.gotoAddBeasiswa = gotoAddBeasiswa;
        vm.gotoBeasiswaDetail = gotoBeasiswaDetail;
        vm.gotoListPendaftar = gotoListPendaftar;

        //////////
        // *api
        $http.get(api.baseUrl + 'beasiswa').then(function (response){
            vm.beasiswas = response.data.data;
            console.log('Data Beasiswa:', vm.beasiswas);

        }, function (response){
            console.log('Data failed :', response)
            alert(response.data.message)
        });
        /**
         * Go to add product
         */
        function gotoAddBeasiswa()
        {
            $localStorage.beasiswa = {};
            $state.go('app.pages_beasiswa_list-beasiswa.add');
        }

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoBeasiswaDetail(id)
        {
            $http.get(api.baseUrl + 'admin/beasiswa/view/'+id).then(function (response){
                vm.beasiswa = response.data.data;
                $localStorage.beasiswa = vm.beasiswa;
                console.log('Data beasiswaa:', vm.beasiswa);
                $state.go('app.pages_beasiswa_list-beasiswa.detail', {id: id, Data: vm.beasiswa});
    
            }, function (response){
                console.log('Data failed :', response)
                alert(response.data.message)    
            });
        }

        function gotoListPendaftar(id)
        {
            $http.post(api.baseUrl + 'pendaftar/'+id+'/tes').then(function (response){
                vm.pendaftars = response.data.data;
                $localStorage.pendaftars = vm.pendaftars;
                console.log('Data Pendaftar:', vm.pendaftars);
                $state.go('app.pages_beasiswa_list-pendaftar', {id: id, Data: vm.pendaftars});
    
            }, function (response){
                console.log('Data failed :', response)
                alert(response.data.message)    
            });
        }
    }
})();