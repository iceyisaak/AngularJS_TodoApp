var angular = angular.module('TodoApp', []);
var TodoController = (function () {
    function TodoController($scope) {
        $scope.title = 'AngularJS TodoApp';
        $scope.todos = { 'task': "", 'date': "", 'done': false };
        $scope.newTask = "";
        $scope.newDate = "";
        $scope.date = new Date();
        localStorage.todos = [];
        $scope.addTodo = function () {
            if (!localStorage.todos) {
                var clearList = [];
                localStorage.todos = JSON.stringify(clearList);
            }
            var tasks = JSON.parse(localStorage.todos);
            tasks.push({ 'task': $scope.newTask, 'date': $scope.newDate, 'done': false });
            localStorage.todos = JSON.stringify(tasks);
            $scope.todos = tasks;
            $scope.newTask = "";
            $scope.newDate = "";
        };
        $scope.delTodo = function (index) {
            var tasks = JSON.parse(localStorage.todos);
            if (tasks.length > index) {
                tasks.splice(index, 1);
                localStorage.todos = JSON.stringify(tasks);
            }
            $scope.todos = tasks;
        };
    }
    return TodoController;
}());
TodoController.$inject = ['$scope'];
angular.controller('TodoController', TodoController);
