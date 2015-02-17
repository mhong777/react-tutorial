'use strict';

angular
  .module('reactApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'react'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
