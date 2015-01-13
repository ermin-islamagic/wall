/**
 * Created by Ermin Islamagic on 13.1.2015.
 */

wallApp.factory('bricksFactory', function(){
    var bricks = [
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },

        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },
        { id: 1, name: 'Jhon Doe', img: 'http://placehold.it/120x80', city: 'Sarajevo' },
        { id: 2,name: 'Smith Doe', img: 'http://placehold.it/120x80', city: 'Tuzla' },
        { id: 3,name: 'Jane Doe', img: 'http://placehold.it/120x80', city: 'Mostar' },
        { id: 4,name: 'Troll Doe', img: 'http://placehold.it/120x80', city: 'Zenica' },
        { id: 5,name: 'Test Doe', img: 'http://placehold.it/120x80', city: 'Banja Luka' },

    ];

    var factory = {};
    factory.getBricks = function(){
        return bricks;
    }

    return factory;
})


controllers.homeController = function($scope, bricksFactory){
    $scope.bricks = [];

    function init(){
        $scope.bricks = bricksFactory.getBricks();
    }

    init();

}
