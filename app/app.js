'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).

config(['$routeProvider',  function($routeProvider) {

    //$locationProvider.html5Mode(true);

    $routeProvider.when("/labby-hall", {
        templateUrl: "view/labby-hall.html",
        controller: "LabbyHallCtrl"
    });

    $routeProvider.when("/about", {
        templateUrl: "view/about.html",
        controller: "AboutCtrl"
    });

    $routeProvider.when("/cart", {
        templateUrl: "view/cart.html",
        controller: "CartCtrl"
    });

    $routeProvider.when("/contact", {
        templateUrl: "view/contact.html",
        controller: "ContactCtrl"
    });

    $routeProvider.when("/social", {
        templateUrl: "view/social.html",
        controller: "SocialCtrl"
    });

    $routeProvider.when("/user", {
        templateUrl: "view/user.html",
        controller: "UserCtrl"
    });

    $routeProvider.otherwise({
        redirectTo: '/labby-hall'
    });
}])


.controller("defaultCtrl", function ($scope, $location) {

    $scope.data = {};

    //$scope.createProduct = function (product) {
    //    new productsResource(product).$create().then(function (newProduct) {
    //        $scope.data.products.push(newProduct);
    $location.path("/");
    //    });
    //}

    //$scope.deleteProduct = function (product) {
    //    product.$delete().then(function () {
    //        $scope.data.products.splice($scope.data.products.indexOf(product), 1);
    //    });

    $location.path("/");
    //}
})
.controller("LabbyHallCtrl", function ($scope, $location, $route) {

})
.controller("AboutCtrl", function ($scope, $location, $route) {

})
.controller("CartCtrl", function ($scope, $location, $route) {

})
.controller("ContactCtrl", function ($scope, $location, $route) {

})
.controller("SocialCtrl", function ($scope, $location, $route) {

})
.controller("UserCtrl", function ($scope, $location, $route) {

});
