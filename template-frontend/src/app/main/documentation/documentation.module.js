(function ()
{
    'use strict';

    angular
        .module('app.documentation', [
            'app.documentation.changelog',
            'app.documentation.getting-started',
            'app.documentation.working-with-fuse'
        ])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.documentation', {
                abstract: true,
                url     : '/documentation'
            });

        // Navigation
        msNavigationServiceProvider.saveItem('documentation', {
            title : 'DOCUMENTATION',
            group : true,
            weight: 5
        });
    }
})();