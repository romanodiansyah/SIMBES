(function ()
{
    'use strict';

    angular
        .module('app.user-database.mahasiswa')
        .controller('TambahMahasiswaController', TambahMahasiswaController);

    /** @ngInject */
    function TambahMahasiswaController($scope, $document, $state, MahasiswaService, Product)
    {
        var vm = this;

        // Data
        vm.taToolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
        ];
        vm.product = Product;
        vm.jurusanSelectFilter = '';

        vm.jenis_kelamin = ('Laki-Laki Perempuan').split(' ').map(function (jenis_kelamin)
        {
            return {abbrev: jenis_kelamin};
        });

        vm.jurusan = ('Statistika,Geofisika dan Meteorologi,Biologi,Kimia,Matematika,Ilmu Komputer,Fisika,Biokimia').split(',').map(function (jurusan)
        {
            return {abbrev: jurusan};
        });

        vm.fakultas = ('Pertanian,Kedokteran Hewan,Perikanan dan Ilmu Kelautan,Peternakan,Kehutanan,Teknologi Pertanian,Matematika dan Ilmu Pengetahuan Alam,Ekonomi dan Manajemen,Ekologi Manusia,Sekolah Vokasi,Sekolah Bisnis').split(',').map(function (fakultas)
        {
            return {abbrev: fakultas};
        });
        
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
        vm.onJurusanSelectorOpen = onJurusanSelectorOpen;
        vm.onJurusanSelectorClose = onJurusanSelectorClose;
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
                MahasiswaService.updateProduct(vm.product.id, vm.product);
            }
            else
            {
                MahasiswaService.createProduct(vm.product);
            }

        }

        /**
         * Go to products page
         */
        function gotoProducts()
        {
            $state.go('app.user-database_mahasiswa_list-mahasiswa');
        }

        /**
         * On categories selector open
         */
        function onJurusanSelectorOpen()
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
        function onJurusanSelectorClose()
        {
            // Clear the filter
            vm.jurusanSelectFilter = '';

            // Unbind the input event
            $document.find('md-select-header input[type="search"]').unbind('keydown');
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