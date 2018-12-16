(function ()
{
    'use strict';

    angular
        .module('app.user-database.mahasiswa',
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
            .state('app.user-database_mahasiswa', {
                abstract: true,
                url     : '/mahasiswa'
            })
            .state('app.user-database_mahasiswa_list-mahasiswa', {
                url      : '/list-mahasiswa',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/user-database/mahasiswa/views/list-mahasiswa/list-mahasiswa.html',
                        controller : 'ListMahasiswaController as vm'
                    }
                },
                bodyClass: 'mahasiswa'
            })
            .state('app.user-database_mahasiswa_list-mahasiswa.add', {
                url      : '/add',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/user-database/mahasiswa/views/tambah-mahasiswa/tambah-mahasiswa.html',
                        controller : 'TambahMahasiswaController as vm'
                    }
                },
                bodyClass: 'mahasiswa'
            })
            .state('app.user-database_mahasiswa_list-mahasiswa.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/user-database/mahasiswa/views/tambah-mahasiswa/tambah-mahasiswa.html',
                        controller : 'TambahMahasiswaController as vm'
                    }
                },
                resolve  : {
                    Product: function ($stateParams, Products, MahasiswaService)
                    {
                        return MahasiswaService.getProduct($stateParams.id);
                    }
                },
                bodyClass: 'mahasiswa'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/user-database/mahasiswa');

        // Api
        msApiProvider.register('mahasiswa.products', ['app/data/user-database/mahasiswa/list-mahasiswa.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('user-database.mahasiswa', {
            title : 'Mahasiswa',
            icon  : 'icon-baby',
            weight: 3
        });

        msNavigationServiceProvider.saveItem('user-database.mahasiswa.list-mahasiswa', {
            title: 'List Mahasiswa',
            state: 'app.user-database_mahasiswa_list-mahasiswa'
        });
    }
})();