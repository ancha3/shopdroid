(function() {
  'use strict';
  angular.module('shopdroid')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider,
    $urlRouterProvider)
  {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/login");

    $stateProvider
      .state('login',{
        url: "/login",
        templateUrl: "app/components/login/views/login.html",
        data: {
          pageTitle: 'Login',
          specialClass: 'gray-bg'
        }
      })
  }
})();
