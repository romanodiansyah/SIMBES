(function ()
{
    'use strict';

    angular
        .module('app.pages.berita')
        .controller('TambahBeritaController', TambahBeritaController);

    /** @ngInject */
    function TambahBeritaController($scope, $state, $http, $localStorage, api)
    {
        var vm = this;
        vm.submitted = false;
        vm.news = $localStorage.news;
        vm.gotoListNews = gotoListNews;
        vm.saveNews = saveNews;
        vm.gotoNewsDetail = gotoNewsDetail;

        function gotoListNews(){
            
            window.location.href = '/list-berita';
        }
        function saveNews(id){
            if(id){
                $http.put(api.baseUrl+ 'admin/update/news/' + id, vm.news).then(function (response){
                    console.log('news', response);
                    $localStorage.news = response.data
                    console.log(window.localStorage);
                    // $state.go('app.dashboards.project');
                    window.location.href = '/list-berita'
                    vm.submitted = true;
                    
                    }, function(response){
                        console.log(response)
                        alert(response.data.message);
                        vm.submitted = false;
                    });
            }                
            else{
                $http.post(api.baseUrl+ 'admin/create/news', vm.news).then(function (response){
                    console.log('news', response);
                    $localStorage.news = response.data
                    console.log(window.localStorage);
                    // $state.go('app.dashboards.project');
                    window.location.href = '/list-berita'
                    vm.submitted = true;
                    
                    }, function(response){
                        console.log(response);
                        alert(response.data.message);
                        vm.submitted = false;
                    });
                }
            // }else{
            //     vm.newsId = vm.news.id_berita;
            //     $http.get(api.baseUrl + 'admin/news' + vm.newsId).then(function (response){
            //         vm.news = response.data;
            //         console.log('news:', vm.news);
            //         window.location.href = '/list-berita'
            //         vm.submitted = true;
                    
            //     }, function (response){
            //         console.log('Data failed :', response)
            //         // alert(response.data.message)
            //     });
            // }
        }


        function gotoNewsDetail(data){
            
            $state.go('app.pages_berita_list-berita.detail', {id: data.id, Data: data});
        }

        // Data
        vm.taToolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
        ];
        //vm.product = Product;
        vm.ngFlowOptions = {
            // You can configure the ngFlow from here
            /*target                   : 'api/media/image',
             chunkSize                : 15 * 1024 * 1024,
             maxChunkRetries          : 1,
             simultaneousUploads      : 1,
             testChunks               : false,
             progressCallbacksInterval: 1000*/
        };
        vm.ngFlow = {
            // ng-flow will be injected into here through its directive
            flow: {}
        };     

        // Methods
         vm.isFormValid = isFormValid;
     
        //////////

        // init();

        /**
         * Checks if the given form valid
         *
         * @param formName
         */
        function isFormValid(formName)
        {
            if ( $scope[formName] && $scope[formName].$valid )
            {
                return $scope[formName].$valid;
            }
        }
    }
})();