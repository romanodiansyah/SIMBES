<!doctype html> <html lang="en"> <head> <meta charset="UTF-8"> <title>Laravel and Angular Admin System</title>

    <!-- CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"> <!-- load bootstrap via cdn -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->
    <style>
        body        { padding-top:30px; }
        form        { padding-bottom:20px; }
        .admin    { padding-bottom:20px; }
    </style>

    <!-- JS -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.8/angular.min.js"></script> <!-- load angular -->

    <!-- ANGULAR -->
    <!-- all angular resources will be loaded from the /public folder -->
        <script src="js/controllers/adminCtrl.js"></script> <!-- load our controller -->
        <script src="js/services/adminService.js"></script> <!-- load our service -->
        <script src="js/app.js"></script> <!-- load our application -->

</head> 
<!-- declare our angular app and controller --> 
<body class="container" ng-app="adminApp" ng-controller="mainController"> <div class="col-md-8 col-md-offset-2">

    <!-- PAGE TITLE =============================================== -->
    <div class="page-header">
        <h2>Laravel and Angular Single Page Application</h2>
        <h4>Commenting System</h4>
    </div>

    <!-- NEW admin FORM =============================================== -->
    <form ng-submit="submitadmin()"> <!-- ng-submit will disable the default form action and use our function -->

        <!-- AUTHOR -->
        <div class="form-group">
            <input type="text" class="form-control input-sm" name="email" ng-model="adminData.author" placeholder="Name">
        </div>

        <!-- admin TEXT -->
        <div class="form-group">
            <input type="text" class="form-control input-lg" name="nama" ng-model="adminData.text" placeholder="Say what you have to say">
        </div>

        <!-- SUBMIT BUTTON -->
        <div class="form-group text-right">   
            <button type="submit" class="btn btn-primary btn-lg">Submit</button>
        </div>
    </form>

    <!-- LOADING ICON =============================================== -->
    <!-- show loading icon if the loading variable is set to true -->
    <p class="text-center" ng-show="loading"><span class="fa fa-meh-o fa-5x fa-spin"></span></p>

    <!-- THE adminS =============================================== -->
    <!-- hide these admins if the loading variable is true -->
    <div class="admin" ng-hide="loading" ng-repeat="admin in admins">
        <h3>admin #{{ admin.id }} <small>by {{ admin.author }}</h3>
        <p>{{ admin.text }}</p>

        <p><a href="#" ng-click="deleteadmin(admin.id)" class="text-muted">Delete</a></p>
    </div>

</div> 
</body> 
</html>
