(function ()
{
    'use strict';

    angular
        .module('app.user-database.staff')
        .controller('ListStaffController', ListStaffController);

    /** @ngInject */
    function ListStaffController($state, api, $http, $localStorage)
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
                    // Target the status column
                    targets   : 5,
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
                    targets           : 6,
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
        vm.gotoAddStaff = gotoAddStaff;
        vm.gotoProductDetail = gotoProductDetail;

        //////////
        // * api
        $http.get(api.baseUrl + 'admin/list/staff').then(function (response){
            vm.staffs = response.data.data;
            console.log('Data Staff:', vm.staffs);

        }, function (response){
            console.log('Data failed :', response)
            alert(response.data.message)
        });

        /**
         * Go to add product
         */
        function gotoAddStaff()
        {
            $state.go('app.user-database_staff_list-staff.add');
        }

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoProductDetail(id)
        {
            $state.go('app.user-database_staff_list-staff.detail', {id: id});
        }
    }
})();