(function ()
{
    'use strict';

    angular
        .module('app.pages.beasiswa',
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
            .state('app.pages_beasiswa', {
                abstract: true,
                url     : '/beasiswa'
            })
            .state('app.pages_beasiswa_list-beasiswa', {
                url      : '/list-beasiswa',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/beasiswa/views/list-beasiswa/list-beasiswa.html',
                        controller : 'ListBeasiswaController as vm'
                    }
                },
                resolve  : {
                    Products: function (BeasiswaService)
                    {
                        return BeasiswaService.getProducts();
                    }
                },
                bodyClass: 'beasiswa'
            })
            .state('app.pages_beasiswa_list-beasiswa.add', {
                url      : '/add',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/beasiswa/views/tambah-beasiswa/tambah-beasiswa.html',
                        controller : 'TambahBeasiswaController as vm'
                    }
                },
                resolve: {
                    Product: function (BeasiswaService)
                    {
                        return BeasiswaService.newProduct();
                    }
                },
                bodyClass: 'beasiswa'
            })
            .state('app.pages_beasiswa_list-beasiswa.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/beasiswa/views/tambah-beasiswa/tambah-beasiswa.html',
                        controller : 'TambahBeasiswaController as vm'
                    }
                },
                resolve  : {
                    Product: function ($stateParams, Products, BeasiswaService)
                    {
                        return BeasiswaService.getProduct($stateParams.id);
                    }
                },
                bodyClass: 'beasiswa'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/beasiswa');

        // Api
        msApiProvider.register('beasiswa.products', ['app/data/beasiswa/list-beasiswa.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('pages.beasiswa', {
            title : 'Beasiswa',
            icon  : 'icon-cube',
            weight: 3
        });

        msNavigationServiceProvider.saveItem('pages.beasiswa.list-beasiswa', {
            title: 'List Beasiswa',
            state: 'app.pages_beasiswa_list-beasiswa'
        });
    }
})();