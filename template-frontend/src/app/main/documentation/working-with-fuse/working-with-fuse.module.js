(function ()
{
    'use strict';

    angular
        .module('app.documentation.working-with-fuse', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.documentation.working-with-fuse', {
                abstract: true,
                url     : '/working-with-fuse'
            })
            .state('app.documentation.working-with-fuse.server', {
                url  : '/server',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/working-with-fuse/pages/1-server.html',
                        controller : 'WorkingWithFuseController as vm'
                    }
                }
            })
            .state('app.documentation.working-with-fuse.fuse', {
                abstract: true,
                url     : '/fuse'
            })
            .state('app.documentation.working-with-fuse.fuse.directory-structure', {
                url  : '/directory-structure',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/working-with-fuse/pages/2-1-directory-structure.html',
                        controller : 'WorkingWithFuseController as vm'
                    }
                }
            })
            .state('app.documentation.working-with-fuse.fuse.modularity', {
                url  : '/modularity',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/working-with-fuse/pages/2-2-modularity.html',
                        controller : 'WorkingWithFuseController as vm'
                    }
                }
            })
            .state('app.documentation.working-with-fuse.fuse.skeleton-project', {
                url  : '/skeleton-project',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/working-with-fuse/pages/2-3-skeleton-project.html',
                        controller : 'WorkingWithFuseController as vm'
                    }
                }
            })
            .state('app.documentation.working-with-fuse.fuse.third-party-libraries', {
                url  : '/third-party-libraries',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/working-with-fuse/pages/2-4-third-party-libraries.html',
                        controller : 'WorkingWithFuseController as vm'
                    }
                }
            })
            .state('app.documentation.working-with-fuse.fuse.multilanguage', {
                url  : '/multilanguage',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/working-with-fuse/pages/2-5-multilanguage.html',
                        controller : 'WorkingWithFuseController as vm'
                    }
                }
            })
            .state('app.documentation.working-with-fuse.fuse.api-services', {
                abstract: true,
                url     : '/api-services'
            })
            .state('app.documentation.working-with-fuse.fuse.api-services.method-1', {
                url  : '/method-1',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/working-with-fuse/pages/2-6-1-api-method-1.html',
                        controller : 'WorkingWithFuseController as vm'
                    }
                }
            })
            .state('app.documentation.working-with-fuse.fuse.api-services.method-2', {
                url  : '/method-2',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/working-with-fuse/pages/2-6-2-api-method-2.html',
                        controller : 'WorkingWithFuseController as vm'
                    }
                }
            })
            .state('app.documentation.working-with-fuse.production', {
                url  : '/production',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/documentation/working-with-fuse/pages/3-production.html',
                        controller : 'WorkingWithFuseController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('documentation.working-with-fuse', {
            title : 'Working with Fuse',
            icon  : 'icon-battery',
            weight: 2
        });

        msNavigationServiceProvider.saveItem('documentation.working-with-fuse.server', {
            title : 'Server',
            state : 'app.documentation.working-with-fuse.server',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('documentation.working-with-fuse.fuse', {
            title : 'Fuse',
            weight: 2
        });

        msNavigationServiceProvider.saveItem('documentation.working-with-fuse.fuse.directory-structure', {
            title : 'Directory Structure',
            state : 'app.documentation.working-with-fuse.fuse.directory-structure',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('documentation.working-with-fuse.fuse.modularity', {
            title : 'Modularity',
            state : 'app.documentation.working-with-fuse.fuse.modularity',
            weight: 2
        });

        msNavigationServiceProvider.saveItem('documentation.working-with-fuse.fuse.skeleton-project', {
            title : 'Skeleton Project',
            state : 'app.documentation.working-with-fuse.fuse.skeleton-project',
            weight: 3
        });

        msNavigationServiceProvider.saveItem('documentation.working-with-fuse.fuse.third-party-libraries', {
            title : 'Third Party Libraries',
            state : 'app.documentation.working-with-fuse.fuse.third-party-libraries',
            weight: 4
        });

        msNavigationServiceProvider.saveItem('documentation.working-with-fuse.fuse.multilanguage', {
            title : 'Multilanguage',
            state : 'app.documentation.working-with-fuse.fuse.multilanguage',
            weight: 5
        });

        msNavigationServiceProvider.saveItem('documentation.working-with-fuse.fuse.api-services', {
            title : 'API Services',
            weight: 6
        });

        msNavigationServiceProvider.saveItem('documentation.working-with-fuse.fuse.api-services.method-1', {
            title : 'Method 1',
            state : 'app.documentation.working-with-fuse.fuse.api-services.method-1',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('documentation.working-with-fuse.fuse.api-services.method-2', {
            title : 'Method 2',
            state : 'app.documentation.working-with-fuse.fuse.api-services.method-2',
            weight: 2
        });

        msNavigationServiceProvider.saveItem('documentation.working-with-fuse.production', {
            title : 'Production',
            state : 'app.documentation.working-with-fuse.production',
            weight: 3
        });
    }
})();