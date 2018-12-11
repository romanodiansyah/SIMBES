(function ()
{
    'use strict';

    angular
        .module('app.documentation.getting-started', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.documentation.getting-started', {
                abstract: true,
                url     : '/getting-started'
            })
            .state('app.documentation.getting-started.introduction', {
                url  : '/introduction',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/getting-started/pages/1-introduction.html',
                        controller : 'GettingStartedController as vm'
                    }
                }
            })
            .state('app.documentation.getting-started.prerequisites', {
                url  : '/prerequisites',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/getting-started/pages/2-prerequisites.html',
                        controller : 'GettingStartedController as vm'
                    }
                }
            })
            .state('app.documentation.getting-started.installation', {
                url  : '/installation',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/getting-started/pages/3-installation.html',
                        controller : 'GettingStartedController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('documentation.getting-started', {
            title : 'Getting Started',
            icon  : 'icon-package',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('documentation.getting-started.introduction', {
            title : 'Introduction',
            state : 'app.documentation.getting-started.introduction',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('documentation.getting-started.prerequisites', {
            title : 'Prerequisites',
            state : 'app.documentation.getting-started.prerequisites',
            weight: 2
        });

        msNavigationServiceProvider.saveItem('documentation.getting-started.installation', {
            title : 'Installation',
            state : 'app.documentation.getting-started.installation',
            weight: 2
        });


    }
})();