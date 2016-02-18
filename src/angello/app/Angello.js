'use strict';
angular.module('Angello', ['ngRoute', 'ngAnimate', 'firebase', 'ngMessages', 'Angello.Common',
                              'Angello.Dashboard', 'Angello.Login', 'Angello.Storyboard', 'Angello.User', 'auth0',
                              'angular-jwt', 'angular-storage'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/angello/storyboard/template',
      controller:'StoryboardCtrl',
      controllerAs: 'storyboard'
    })
    .otherwise({
      redirectTo: '/'
    });
});
