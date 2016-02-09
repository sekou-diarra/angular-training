'use strict';
var myModule = angular
  .module('angularTrainingApp', ['ngRoute']);
  myModule.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
