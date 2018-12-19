(function ()
{
    'use strict';

    angular
        .module('app.pages.beasiswa')
        .controller('ListPendaftarBeasiswaController', ListPendaftarBeasiswaController);

    /** @ngInject */
    function ListPendaftarBeasiswaController($state, $scope, api, $http, $localStorage)
    {
        var vm = this;
        vm.pendaftars = $localStorage.pendaftars;
        console.log(vm.pendaftars)
        // Data
        
        vm.dtInstance = {};
        vm.dtOptions = {
            dom         : 'rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            columnDefs  : [
                {
                    // Target the id_pendaftar column
                    targets: 0,
                    width  : '72px'
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
        vm.gotoListPenerima = gotoListPenerima;
        vm.gotoListBeasiswa = gotoListBeasiswa;
        vm.AccPendaftar = AccPendaftar;
        vm.DecPendaftar = DecPendaftar;
        //////////

        // *api
        $http.get(api.baseUrl + 'beasiswa').then(function (response){
            vm.beasiswas = response.data.data;
            console.log('Data  Beasiswa:', vm.beasiswas);

        }, function (response){
            console.log('Data failed :', response)
            alert(response.data.message)
        });

        /**
         * Go to add product
         */
        function gotoListPenerima()
        {
            $state.go('app.pages_beasiswa_list-penerima');
        }

        function gotoListBeasiswa()
        {
            $localStorage.pendaftar = {};
            $state.go('app.pages_beasiswa_list-beasiswa');
        }

        function AccPendaftar(id){
            $http.post(api.baseUrl + 'pendaftar/accept/'+id).then(function (response){
                vm.AccPendaftar = response.data.data;
                console.log('acc pendaftar', vm.beasiswas);
    
            }, function (response){
                console.log('Data failed :', response)
                alert(response.data.message)
            });
        }

        function DecPendaftar(id){
            $http.post(api.baseUrl + 'pendaftar/decline/'+id).then(function (response){
                vm.DecPendaftar = response.data.data;
                console.log('dec pendaftar:', vm.DecPendaftar);
    
            }, function (response){
                console.log('Data failed :', response)
                alert(response.data.message)
            });
        }
    }
})();