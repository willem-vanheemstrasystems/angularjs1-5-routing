var myApp = angular
    .module("myModule", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "templates/home.html",
                controller: "homeCtrl",
                controllerAs: "ctrl"
            })
            .when("/courses", {
                templateUrl: "templates/courses.html",
                controller: "coursesCtrl",
                controllerAs: "ctrl"
            })
            .when("/students", {
                templateUrl: "templates/students.html",
                controller: "studentsCtrl",
                controllerAs: "ctrl"
            })
    })
    .controller("homeCtrl", function($scope) {
        $scope.pageTitle = "Home";
    })
    .controller("coursesCtrl", function($scope, $http) {
        // $http.get("CourseService/GetAllCourses")
        //      .then(function(response) {
        //            $scope.courses = response.data;
        //       }, function(reason) {
        //            $scope.error = reason.data;
        //       });
        $scope.courses = [{ name: "Ruby" }, { name: "JavaScript" }, { name: "Python" }];
    })
    .controller("studentsCtrl", function($scope, $http) {
        // $http.get("StudentsService/GetAllStudents")
        //      .then(function(response) {
        //            $scope.students = response.data;
        //       }, function(reason) {
        //            $scope.error = reason.data;
        //       });
        $scope.students = [{ name: "Ben" }, { name: "Matt" }, { name: "Pam" }];
    });