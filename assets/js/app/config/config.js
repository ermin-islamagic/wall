/**
 * Created by Ermin Islamagic on 13.1.2015.
 */

wallApp.config(function ($routeProvider) {
    $routeProvider.when('/bricks',{
        controller: 'homeController',
        templateUrl: 'assets/js/app/views/partials/home.html'
    }).when('/user/:userId',{
        controller: 'userController',
        templateUrl: 'assets/js/app/views/partials/user.html'
    }).otherwise({ redirectTo: '/bricks' })
});


wallApp.controller(controllers);