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

        // Data
        
        vm.dtInstance = {};
        vm.dtOptions = {
            dom         : 'rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            columnDefs  : [
                {
                    // Target the id_pendaftar column
                    targets: 0,
                    width  : '72px'
                },
                {
                    // Target the id_beasiswa column
                    targets: 1,
                    width  : '72px'
                },
                {
                    // Target the id_user column
                    targets: 2,
                    width  : '72px'
                },
                {
                    // Target the status column
                    targets   : 4,
                    filterable: false,
                    render    : function (data, type)
                    {
                        if ( type === 'display' )
                        {
                            if ( data === 'true' )
                            {
                                return '<i class="icon-checkbox-marked-circle green-500-fg"></i>';
                            }

                            return '<i class="icon-cancel red-500-fg"></i>';
                        }

                        if ( type === 'filter' )
                        {
                            if ( data )
                            {
                                return '1';
                            }

                            return '0';
                        }

                        return data;
                    }
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

        //////////

        // *api
        $http.get(api.baseUrl + 'beasiswa').then(function (response){
            vm.beasiswas = response.data.data;
            console.log('Data Pendaftar Beasiswa:', vm.beasiswas);

        }, function (response){
            console.log('Data failed :', response)
            alert(response.data.message)
        });
    }
})();