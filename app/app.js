'use strict';

// Declare app level module which depends on views, and components
angular.module('agileThoughts', [
  'ngRoute',
  'agileThoughts.view1',
  'agileThoughts.view2',
  'ui.bootstrap.demo',
  'agileThoughts.version',
  'ui.bootstrap',
  'ngTouch',
  'ngAnimate'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
