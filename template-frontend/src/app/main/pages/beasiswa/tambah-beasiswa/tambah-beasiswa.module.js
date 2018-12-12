(function ()
{
    'use strict';

    angular
        .module('app.pages.beasiswa.tambah-beasiswa', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        $stateProvider.state('app.pages_beasiswa_tambah-beasiswa', {
            url      : '/pages/beasiswa/tambah-beasiswa',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/beasiswa/tambah-beasiswa/tambah-beasiswa.html',
                    controller : 'TambahBeasiswaController as vm'
                }
            },
            bodyClass: 'tambah-beasiswa'
        });
		
		// Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/beasiswa/tambah-beasiswa');
		
		// Navigation
        msNavigationServiceProvider.saveItem('pages.beasiswa.tambah-beasiswa', {
            title : 'Tambah Beasiswa',
            state : 'app.pages_beasiswa_tambah-beasiswa',
            weight: 2
        });
    }

})();