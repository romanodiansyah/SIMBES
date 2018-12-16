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

        //////////
        // *api
        $http.get(api.baseUrl + 'beasiswa').then(function (response){
            vm.beasiswas = response.data.data;
            console.log('Data beasiswa:', vm.beasiswas);

        }, function (response){
            console.log('Data failed :', response)
            alert(response.data.message)
        });
        /**
         * Go to add product
         */
        function gotoAddBeasiswa()
        {
            $state.go('app.pages_beasiswa_list-beasiswa.add');
        }

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoBeasiswaDetail(id)
        {
            $http.get(api.baseUrl + 'admin/news/'+id).then(function (response){
                vm.news = response.data.data;
                $localStorage.news = vm.news;
                console.log('Data mahasiswa:', vm.news);
                $state.go('app.pages_berita_list-beasiswa.detail', {id: id, Data: vm.news});
    
            }, function (response){
                console.log('Data failed :', response)
                alert(response.data.message)    
            });
        }
    }
})();