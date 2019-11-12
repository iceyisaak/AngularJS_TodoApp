var angular = angular.module('TodoApp', []);

class TodoController {
  public static $inject = ['$scope'];

  public localStorage: Storage;

  constructor($scope: any) {

    $scope.title = 'AngularJS TodoApp';
    $scope.todos = { 'task': "", 'date': "", 'done': false };
    $scope.newTask = "";
    $scope.newDate = "";
    $scope.date = new Date();

    localStorage.todos = [];

    $scope.addTodo = function () {

      if (!localStorage.todos) {
        let clearList = [];
        localStorage.todos = JSON.stringify(clearList);
      }

      let tasks = JSON.parse(localStorage.todos);
      tasks.push({ 'task': $scope.newTask, 'date': $scope.newDate, 'done': false });
      localStorage.todos = JSON.stringify(tasks);
      $scope.todos = tasks;
      $scope.newTask = "";
      $scope.newDate = "";
    }

    $scope.delTodo = function (index: any) {
      var tasks = JSON.parse(localStorage.todos);
      if (tasks.length > index) {
        tasks.splice(index, 1);
        localStorage.todos = JSON.stringify(tasks);
      }
      $scope.todos = tasks;
    }

  }
}

angular.controller('TodoController', TodoController);