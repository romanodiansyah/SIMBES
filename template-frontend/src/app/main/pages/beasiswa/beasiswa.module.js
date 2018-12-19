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
                bodyClass: 'beasiswa'
            })
            .state('app.pages_beasiswa_list-pendaftar', {
                url      : '/list-pendaftar',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/beasiswa/views/list-pendaftar/list-pendaftar.html',
                        controller : 'ListPendaftarBeasiswaController as vm'
                    }
                },
                bodyClass: 'beasiswa'
            })
            .state('app.pages_beasiswa_list-penerima', {
                url      : '/list-penerima',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/beasiswa/views/list-penerima/list-penerima.html',
                        controller : 'ListPenerimaBeasiswaController as vm'
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

        // msNavigationServiceProvider.saveItem('pages.beasiswa.list-pendaftar', {
        //     title: 'List Pendaftar Beasiswa',
        //     state: 'app.pages_beasiswa_list-pendaftar'
        // });
    }
})();