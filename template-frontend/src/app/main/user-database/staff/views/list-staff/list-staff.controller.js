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
        vm.gotoAddAdmin = gotoAddAdmin;
        vm.gotoAdminDetail = gotoAdminDetail;

        //////////
        // * api
        $http.get(api.baseUrl + 'admins').then(function (response){
            vm.admins = response.data.data;
            console.log('Data Staff:', vm.admins);

        }, function (response){
            console.log('Data failed:', response)
            alert(response.data.message)
        });

        /**
         * Go to add product
         */
        function gotoAddAdmin()
        {
            $localStorage.admin = {};
            $state.go('app.user-database_staff_list-staff.add');
        }

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoAdminDetail(id)
        {
            $http.get(api.baseUrl + 'admin/'+id).then(function (response){
                vm.admin = response.data.data;
                $localStorage.admin = vm.admin;
                console.log('Data Staff:', vm.admin);
                $state.go('app.user-database_staff_list-staff.detail', {id: id, Data: vm.admin});
    
            }, function (response){
                console.log('Data failed:', response)
                alert(response.data.message)
            });
        }
    }
})();