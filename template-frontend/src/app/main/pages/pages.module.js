(function ()
{
    'use strict';

    angular
        .module('app.pages', [
            'app.pages.auth.login-v2',
            'app.pages.auth.register-v2',
            // 'app.pages.coming-soon',
            // 'app.pages.error-404',
            // 'app.pages.error-500',
            // 'app.pages.invoice',
            // 'app.pages.maintenance',
            // 'app.pages.profile',
            // 'app.pages.search',
            // 'app.pages.timeline',
			'app.pages.beasiswa',
            'app.pages.berita'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('pages', {
            title : 'PAGES',
            group : true,
            weight: 2
        });

        msNavigationServiceProvider.saveItem('pages.auth', {
            title : 'Authentication',
            icon  : 'icon-lock-outline',
            state : 'app.pages_auth',
            weight: 3
        });
    }
})();