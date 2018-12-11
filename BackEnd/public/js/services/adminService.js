angular.module('adminService', [])

.factory('Admin', function($http) {

    return {
        // get all the admins
        get : function() {
            return $http.get('/api/admins');
        },

        // save a comment (pass in comment data)
        save : function(commentData) {
            return $http({
                method: 'POST',
                url: '/api/auth/admin/register',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(commentData)
            });
        },

        // destroy a comment
        // destroy : function(id) {
        //     return $http.delete('/api/comments/' + id);
        // }
    }

});
