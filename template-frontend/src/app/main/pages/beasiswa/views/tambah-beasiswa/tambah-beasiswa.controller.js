(function ()
{
    'use strict';

    angular
        .module('app.pages.beasiswa')
        .controller('TambahBeasiswaController', TambahBeasiswaController);

    /** @ngInject */
    function TambahBeasiswaController($scope, $document, $state, BeasiswaService, Product)
    {
        var vm = this;

        // Data
        vm.taToolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
        ];
        vm.product = Product;
        vm.categoriesSelectFilter = '';

        vm.path = Documents.data.path;
        vm.folders = Documents.data.folders;
        vm.files = Documents.data.files;
        vm.selected = vm.files[0];

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
        vm.dropping = false;
        vm.imageZoomOptions = {};

        // Methods
        vm.saveProduct = saveProduct;
        vm.gotoProducts = gotoProducts;
        vm.onCategoriesSelectorOpen = onCategoriesSelectorOpen;
        vm.onCategoriesSelectorClose = onCategoriesSelectorClose;
        vm.fileAdded = fileAdded;
        vm.upload = upload;
        vm.fileSuccess = fileSuccess;
        vm.isFormValid = isFormValid;
        vm.updateImageZoomOptions = updateImageZoomOptions;

        vm.select = select;
        //////////

        init();

        /**
         * Initialize
         */
        function init()
        {
            if ( vm.product.images.length > 0 )
            {
                vm.updateImageZoomOptions(vm.product.images[0].url);
            }
        }

        /**
         * Save product
         */
        function saveProduct()
        {
            // Since we have two-way binding in place, we don't really need
            // this function to update the products array in the demo.
            // But in real world, you would need this function to trigger
            // an API call to update your database.
            if ( vm.product.id )
            {
                BeasiswaService.updateProduct(vm.product.id, vm.product);
            }
            else
            {
                BeasiswaService.createProduct(vm.product);
            }

        }

        /**
         * Go to products page
         */
        function gotoProducts()
        {
            $state.go('app.pages_beasiswa_list-beasiswa');
        }

        /**
         * On categories selector open
         */
        function onCategoriesSelectorOpen()
        {
            // The md-select directive eats keydown events for some quick select
            // logic. Since we have a search input here, we don't need that logic.
            $document.find('md-select-header input[type="search"]').on('keydown', function (e)
            {
                e.stopPropagation();
            });
        }

        /**
         * On categories selector close
         */
        function onCategoriesSelectorClose()
        {
            // Clear the filter
            vm.categoriesSelectFilter = '';

            // Unbind the input event
            $document.find('md-select-header input[type="search"]').unbind('keydown');
        }

        /**
         * File added callback
         * Triggers when files added to the uploader
         *
         * @param file
         */
        function fileAdded(file)
        {
            // Prepare the temp file data for file list
            var uploadingFile = {
                id       : file.uniqueIdentifier,
                file     : file,
                type     : '',
                owner    : 'Admin SIMBES IPB',
                size     : '',
                modified : moment().format('MMMM D, YYYY'),
                opened   : '',
                created  : moment().format('MMMM D, YYYY'),
                extention: '',
                location : 'My Files > Documents',
                offline  : false,
                preview  : 'assets/images/etc/sample-file-preview.jpg'
            };

            // Append it to the file list
            vm.files.push(uploadingFile);
        }

        /**
         * Upload
         * Automatically triggers when files added to the uploader
         */
        function upload()
        {
            // Set headers
            vm.ngFlow.flow.opts.headers = {
                'X-Requested-With': 'XMLHttpRequest',
                //'X-XSRF-TOKEN'    : $cookies.get('XSRF-TOKEN')
            };

            vm.ngFlow.flow.upload();
        }

        /**
         * File upload success callback
         * Triggers when single upload completed
         *
         * @param file
         * @param message
         */
        function fileSuccess(file, message)
        {
            // Iterate through the file list, find the one we
            // are added as a temp and replace its data
            // Normally you would parse the message and extract
            // the uploaded file data from it
            angular.forEach(vm.files, function (item, index)
            {
                if ( item.id && item.id === file.uniqueIdentifier )
                {
                    // Normally you would update the file from
                    // database but we are cheating here!

                    // Update the file info
                    item.name = file.file.name;
                    item.type = 'document';

                    // Figure out & upddate the size
                    if ( file.file.size < 1024 )
                    {
                        item.size = parseFloat(file.file.size).toFixed(2) + ' B';
                    }
                    else if ( file.file.size >= 1024 && file.file.size < 1048576 )
                    {
                        item.size = parseFloat(file.file.size / 1024).toFixed(2) + ' Kb';
                    }
                    else if ( file.file.size >= 1048576 && file.file.size < 1073741824 )
                    {
                        item.size = parseFloat(file.file.size / (1024 * 1024)).toFixed(2) + ' Mb';
                    }
                    else
                    {
                        item.size = parseFloat(file.file.size / (1024 * 1024 * 1024)).toFixed(2) + ' Gb';
                    }
                }
            });
        }

        /**
         * Select an item
         *
         * @param item
         */
        function select(item)
        {
            vm.selected = item;
        }

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

        /**
         * Update image zoom options
         *
         * @param url
         */
        function updateImageZoomOptions(url)
        {
            vm.imageZoomOptions = {
                images: [
                    {
                        thumb : url,
                        medium: url,
                        large : url
                    }
                ]
            };
        }
    }
})();