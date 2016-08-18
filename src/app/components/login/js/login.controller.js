/**
 * Created by Ashwin on 9/26/2015.
 */

'use strict';

angular.module('shopdroid')
    .controller('LoginController', function($state) {
      var vm = this;

      vm.submit = function(){
        $state.go('home.main');
      };
          //   $scope.credentials = {};
          //   $scope.loginForm = {};
          //   $scope.error = false;
          //
          //   //when the form is submitted
          //   $scope.submit = function() {
          //       $scope.submitted = true;
          //       if (!$scope.loginForm.$invalid) {
          //           $scope.login($scope.credentials);
          //       } else {
          //           $scope.error = true;
					// console.log("error at submit function");
          //           return;
          //       }
          //   };

            //Performs the login function, by sending a request to the server with the Auth service
            // $scope.login = function(credentials) {
            //     $scope.error = false;
            //     $('#wave_login').addClass('sk-spinner sk-spinner-wave');
            //     Auth.login(credentials, function(user) {
            //         //success function
            //         $('#wave_login').removeAttr('class').attr('class', 'sk-spinner-wave');
            //         $state.go('home.main');
            //     }, function(err) {
            //         $('#wave_login').removeAttr('class').attr('class', 'sk-spinner-wave');
            //         $scope.error = true;
            //     });
            // };

            // if a session exists for current user (page was refreshed)
            // log him in again
            // if ($window.sessionStorage["userInfo"]) {
            //     var credentials = JSON.parse($window.sessionStorage["userInfo"]);
            //     $scope.login(credentials);
            // }

        });
