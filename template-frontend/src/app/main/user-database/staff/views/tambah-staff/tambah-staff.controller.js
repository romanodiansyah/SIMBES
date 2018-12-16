(function ()
{
    'use strict';

    angular
        .module('app.user-database.staff')
        .controller('TambahStaffController', TambahStaffController);

    /** @ngInject */
    function TambahStaffController($scope, $document, $state, StaffService, Product)
    {
        var vm = this;

        // Data
        vm.taToolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
        ];
        vm.product = Product;

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
        vm.saveProduct = saveProduct;
        vm.gotoProducts = gotoProducts;
        vm.isFormValid = isFormValid;

        //////////

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
                StaffService.updateProduct(vm.product.id, vm.product);
            }
            else
            {
                StaffService.createProduct(vm.product);
            }

        }

        /**
         * Go to products page
         */
        function gotoProducts()
        {
            $state.go('app.user-database_staff_list-staff');
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
    }
})();