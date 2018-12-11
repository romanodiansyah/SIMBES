(function ()
{
    'use strict';

    angular
        .module('app.documentation.changelog', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.documentation.changelog', {
                url     : '/changelog',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/changelog/changelog.html',
                        controller : 'ChangelogController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('documentation.changelog', {
            title : 'Changelog',
            icon  : 'icon-console',
            state : 'app.documentation.changelog',
            weight: 0
        });
    }
})();