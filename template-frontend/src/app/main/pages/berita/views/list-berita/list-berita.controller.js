(function ()
{
    'use strict';

    angular
        .module('app.pages.berita')
        .controller('ListBeritaController', ListBeritaController);

    /** @ngInject */
    function ListBeritaController($state, Products)
    {
        var vm = this;

        // Data
        vm.products = Products;

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
                    // Target the image column
                    targets   : 1,
                    filterable: false,
                    sortable  : false,
                    width     : '80px'
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
                },
                {
                    // Target the actions column
                    targets           : 5,
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
        vm.gotoAddProduct = gotoAddProduct;
        vm.gotoProductDetail = gotoProductDetail;

        //////////

        /**
         * Go to add product
         */
        function gotoAddProduct()
        {
            $state.go('app.pages_berita_list-berita.add');
        }

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoProductDetail(id)
        {
            $state.go('app.pages_berita_list-berita.detail', {id: id});
        }
    }
})();