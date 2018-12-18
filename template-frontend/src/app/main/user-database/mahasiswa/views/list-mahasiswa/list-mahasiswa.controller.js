(function ()
{
    'use strict';

    angular
        .module('app.user-database.mahasiswa')
        .controller('ListMahasiswaController', ListMahasiswaController);

    /** @ngInject */
    function ListMahasiswaController($state, api, $http, $localStorage)
    {
        var vm = this;

        // Data
        
        vm.dtInstance = {};
        vm.dtOptions = {
            dom         : 'rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            columnDefs  : [
                {
                    // Target the id column
                    targets: 0,
                    width  : '72px'
                },
                {
                    // Target the actions column
                    targets           : 7,
                    responsivePriority: 1,
                    filterable        : false,
                    sortable          : false
                }
            ],
            initComplete: function ()
            {
                var api = this.api(),
                    searchBox = angular.element('body').find('#e-commerce-products-search');

                // Bind an external input as a table wide search box
                if ( searchBox.length > 0 )
                {
                    searchBox.on('keyup', function (event)
                    {
                        api.search(event.target.value).draw();
                    });
                }
            },
            pagingType  : 'simple',
            lengthMenu  : [10, 20, 30, 50, 100],
            pageLength  : 20,
            scrollY     : 'auto',
            responsive  : true
        };

        // Methods
        vm.gotoAddStudent = gotoAddStudent;
        vm.gotoStudentDetail = gotoStudentDetail;

        //////////
        // * api
        $http.get(api.baseUrl + 'admin/list/student').then(function (response){
            vm.students = response.data.data;
            console.log('Data Mahasiswa:', vm.students);

        }, function (response){
            console.log('Data failed :', response)
            alert(response.data.message)
        });

        /**
         * Go to add product
         */
        function gotoAddStudent()
        {
            $localStorage.student = "";
            $state.go('app.user-database_mahasiswa_list-mahasiswa.add');
        }

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoStudentDetail(id)
        {
            $http.get(api.baseUrl + 'admin/student/'+id).then(function (response){
                vm.student = response.data.data;
                $localStorage.student = vm.student;
                console.log('Data mahasiswa:', vm.student);
                $state.go('app.user-database_mahasiswa_list-mahasiswa.detail', {id: id, Data: vm.student});
    
            }, function (response){
                console.log('Data failed :', response)
                alert(response.data.message)
                $state.go('app.user-database_mahasiswa_list-mahasiswa');    
            });
    
            $state.go('app.user-database_mahasiswa_list-mahasiswa.detail', {id: id});
        }
    }
})();