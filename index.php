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
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head lang="en">
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <title>My wall</title>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width"/>

    <link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="assets/css/style.css?v=<?php echo time(); ?>" type="text/css">

</head>
<body data-ng-app="wallApp">

    <!--[if lt IE 7]>
    <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/" target="_blank">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true" target="_blank">install Google Chrome Frame</a> to better experience this site.</p>
    <![endif]-->

    <!--[if lt IE 9]>
    <script src="scripts/vendor/es5-shim.min.js"></script>
    <script src="scripts/vendor/json3.min.js"></script>
    <![endif]-->

    <div class="nav-menu-wrap">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3>My Wall</h3>
                </div>
            </div>

        </div>
    </div>

    <div class="views" ng-view></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular.min.js"></script>
    <script src="assets/js/app/module/angular-route.min.js"></script>
    <script src="assets/js/app/module/angular-sanitize.min.js"></script>
    <script src="assets/js/app/module/ng-infinite-scroll.min.js"></script>
    <script src="assets/js/app/module/ui-bootstrap-tpls-0.12.0.min.js"></script>
    <script src="assets/js/app/app.js?v=<?php echo time(); ?>"></script>
</body>
</html>