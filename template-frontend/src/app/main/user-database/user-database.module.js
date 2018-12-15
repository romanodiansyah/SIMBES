(function ()
{
    'use strict';

    angular
        .module('app.user-database', [
            
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