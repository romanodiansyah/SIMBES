(function ()
{
    'use strict';

    angular
        .module('app.user-database.staff')
        .factory('StaffService', StaffService);

    /** @ngInject */
    function StaffService($q, $mdToast, msApi)
    {
        var products = [];

        var service = {
            getProducts     : getProducts,
            getProduct      : getProduct,
            updateProduct   : updateProduct,
            newProduct      : newProduct,
            createProduct   : createProduct
        };

        return service;

        //////////

        /**
         * Get products
         */
        function getProducts()
        {
            // Create a new deferred object
            var deferred = $q.defer();

            // If we have already loaded the products,
            // don't do another API call, get them from
            // the array
            if ( products.length > 0 )
            {
                deferred.resolve(products);
            }
            // otherwise make an API call and load
            // the products
            else
            {
                msApi.request('staff.products@get', {},

                    // SUCCESS
                    function (response)
                    {
                        // Store the products
                        products = response.data;

                        // Resolve the promise
                        deferred.resolve(products);
                    },

                    // ERROR
                    function (response)
                    {
                        // Reject the promise
                        deferred.reject(response);
                    }
                );
            }

            return deferred.promise;
        }

        /**
         * Get product by id
         *
         * @param id
         */
        function getProduct(id)
        {
            // Create a new deferred object
            var deferred = $q.defer();

            // Iterate through the products and find
            // the correct one. This is an unnecessary
            // code as in real world, you would do
            // another API call here to get the product
            // details
            for ( var i = 0; i < products.length; i++ )
            {
                if ( parseInt(products[i].id) === parseInt(id) )
                {
                    deferred.resolve(products[i]);
                }
            }

            return deferred.promise;
        }

        /**
         * Update the product
         *
         * @param id
         * @param product
         */
        function updateProduct(id, product)
        {
            // This is a dummy function for the demo.
            // In real world, you would use this
            // function to make another API call to
            // update your database.
            console.info('The product with the id of', id, 'has been updated with the following information:', product);
        }

        /**
         * Returns a default product structure
         */
        function newProduct()
        {
            return {
                images          : [
                    {
                        default: true,
                        id     : 1,
                        url    : 'assets/images/ecommerce/product-image-placeholder.png',
                        type   : 'image'
                    }
                ],
                active          : false
            };
        }

        /**
         * Create product
         *
         * @param product
         */
        function createProduct(product)
        {
            // This is a dummy function for a demo.
            // In real world, you would do an API
            // call to add new product to your
            // database.

            // Generate a random id
            product.id = Math.floor((Math.random() * 10) + 1);

            // Add the product
            products.unshift(product);

            // Show a toast
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Staff created!')
                    .position('top right')
            );
        }
    }

})();