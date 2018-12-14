(function ()
{
    'use strict';

    angular
        .module('app.pages.auth',
            [
                'app.pages.auth.register-v2',
				'app.pages.auth.login-v2'
            ]
        )
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
		msNavigationServiceProvider.saveItem('pages.auth', {
            title : 'User',
            icon  : 'icon-account',
            weight: 3
        });

        msNavigationServiceProvider.saveItem('pages.auth.register-v2', {
            title: 'Register Admin',
            state: 'app.pages_auth_register-v2'
        });
		
		msNavigationServiceProvider.saveItem('pages.auth.login-v2', {
            title: 'Login Admin',
            state: 'app.pages_auth_register-v2'
        });
    }

})();