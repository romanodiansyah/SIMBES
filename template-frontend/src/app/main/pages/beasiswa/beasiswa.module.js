(function ()
{
    'use strict';

    angular
        .module('app.pages.beasiswa',
            [
                'app.pages.beasiswa.tambah-beasiswa'
                // 'app.dashboards.server',
                // 'app.dashboards.analytics'
            ]
        )
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
		msNavigationServiceProvider.saveItem('pages.beasiswa', {
            title : 'Beasiswa',
            icon  : 'icon-cube',
			state : 'app.pages.beasiswa',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('pages.beasiswa.tambah-beasiswa', {
            title: 'Tambah Beasiswa',
            state: 'app.pages_beasiswa_tambah-beasiswa'
        });
    }

})();