(function ()
{
    'use strict';

    angular
        .module('app.pages.berita',
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
            .state('app.pages_berita', {
                abstract: true,
                url     : '/berita'
            })
            .state('app.pages_berita_list-berita', {
                url      : '/list-berita',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/berita/views/list-berita/list-berita.html',
                        controller : 'ListBeritaController as vm'
                    }
                },
                bodyClass: 'berita',
                params: {Data: null}
            })
            .state('app.pages_berita_list-berita.add', {
                url      : '/add',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/berita/views/tambah-berita/tambah-berita.html',
                        controller : 'TambahBeritaController as vm'
                    }
                },
                bodyClass: 'berita',
                params: {Data: null}
            })
            .state('app.pages_berita_list-berita.detail', {
                url      : 'berita/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/berita/views/tambah-berita/tambah-berita.html',
                        controller : 'TambahBeritaController as vm'
                    }
                },
                bodyClass: 'berita',
                params: {Data: null}
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/berita');

        // Api
        msApiProvider.register('berita.products', ['app/data/berita/list-berita.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('pages.berita', {
            title : 'Berita',
            icon  : 'icon-newspaper',
            weight: 3
        });

        msNavigationServiceProvider.saveItem('pages.berita.list-berita', {
            title: 'List Berita',
            state: 'app.pages_berita_list-berita'
        });
    }
})();