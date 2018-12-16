(function ()
{
    'use strict';

    angular
        .module('app.pages.berita')
        .controller('ListBeritaController', ListBeritaController);

    /** @ngInject */
    function ListBeritaController($state, api, $http, $localStorage)
    {
        var vm = this;

        // Data
        //vm.listNews = listNews;

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
                    // Target the status column
                    targets   : 2,
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
                },
                {
                    // Target the actions column
                    targets           : 3,
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
        vm.submitted = false;
        // Methods
        vm.gotoAddlistNews = gotoAddlistNews;
        vm.gotolistNewsDetail = gotolistNewsDetail;
        //////////
        $http.get(api.baseUrl + 'admin/list/news').then(function (response){
            vm.listNews = response.data.data;
            console.log('Data news:', vm.listNews);
            
        }, function (response){
            console.log('Data failed :', response)
            
            // alert(response.data.message)
        });



        

        /**
         * Go to add listNews
         */
        function gotoAddlistNews()
        {
            
            $state.go('app.pages_berita_list-berita.add');
        }



        /**
         * Go to listNews detail
         *
         * @param id
         */
        function gotolistNewsDetail(id)
        {
            $state.go('app.pages_berita_list-berita.detail', {id: id});
        }
    }
})();