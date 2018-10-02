'use strict';

angular.module('agileThoughts.view2', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])
  .factory('myhHttpFactory', function ($http) {

    const factory = {
      httpData: getData,
      getDataById: getTodoById
    };

    function getData() {
      return $http.get('https://jsonplaceholder.typicode.com/todos')
        .then(function(response) {
          console.log(response);
          return response.data;
        })
    }

    function getTodoById(id) {
      return $http.get('https://jsonplaceholder.typicode.com/todos/' + id)
        .then(function(response) {
          return response.data;
        })
    }

    return factory;

  })
  .controller('View2Ctrl', function($scope, myhHttpFactory) {
    myhHttpFactory.httpData().then(
      (data) => $scope.todos = data
    );

    $scope.fetchItem = function(selectedItem) {
      myhHttpFactory.getDataById(selectedItem.id).then(
        (dataSet) => console.log(dataSet)
      );
    }

  });