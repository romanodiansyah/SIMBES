(function ()
{
    'use strict';

    angular
        .module('app.user-database', [
            'app.user-database.mahasiswa',
			'app.user-database.staff'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('user-database', {
            title : 'USER DATABASE',
            group : true,
            weight: 2
        });
    }
})();