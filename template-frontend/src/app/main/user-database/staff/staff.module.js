(function ()
{
    'use strict';

    angular
        .module('app.user-database.staff',
            [
                // 3rd Party Dependencies
                'wipImageZoom',
                'datatables',
                'flow',
                'nvd3',
                'textAngular',
                'uiGmapgoogle-maps',
                'xeditable'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.user-database_staff', {
                abstract: true,
                url     : '/staff'
            })
            .state('app.user-database_staff_list-staff', {
                url      : '/list-staff',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/user-database/staff/views/list-staff/list-staff.html',
                        controller : 'ListStaffController as vm'
                    }
                },
                bodyClass: 'staff'
            })
            .state('app.user-database_staff_list-staff.add', {
                url      : '/add',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/user-database/staff/views/tambah-staff/tambah-staff.html',
                        controller : 'TambahStaffController as vm'
                    }
                },
                resolve: {
                    Product: function (StaffService)
                    {
                        return StaffService.newProduct();
                    }
                },
                bodyClass: 'staff'
            })
            .state('app.user-database_staff_list-staff.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/user-database/staff/views/tambah-staff/tambah-staff.html',
                        controller : 'TambahStaffController as vm'
                    }
                },
                resolve  : {
                    Product: function ($stateParams, Products, StaffService)
                    {
                        return StaffService.getProduct($stateParams.id);
                    }
                },
                bodyClass: 'staff'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/user-database/staff');

        // Api
        msApiProvider.register('staff.products', ['app/data/user-database/staff/list-staff.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('user-database.staff', {
            title : 'Staff',
            icon  : 'icon-codepen',
            weight: 3
        });

        msNavigationServiceProvider.saveItem('user-database.staff.list-staff', {
            title: 'List Staff',
            state: 'app.user-database_staff_list-staff'
        });
    }
})();