<?php
/**
 * Created by PhpStorm.
 * User: Ermin Islamagic 
 * Web: http://islamagic.com/
 * Date: 11.1.2015
 * Time: 16:41
 */
?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>My wall</title>
    <link rel="stylesheet" href="assets/css/style.css" type="text/css">
</head>
<body data-ng-app="wallApp">

    <div class="nav-menu-wrap">
        <div class="container">
            <h3>My Wall</h3>

        </div>
    </div>

    <div ng-view></div>

    <script src="assets/js/angular.min.js"></script>
    <script src="assets/js/app/module/angular-route.min.js"></script>
    <script src="assets/js/app/app.js"></script>
    <script src="assets/js/app/controllers/home.js"></script>
    <script src="assets/js/app/controllers/user.js"></script>
    <script src="assets/js/app/config/config.js"></script>
</body>
</html>