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
        controller: 'LoginController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Login',
          specialClass: 'gray-bg'
        }
      })
      .state('home', {
            abstract: true,
            url: "/home",
            templateUrl: "app/components/common/views/content.html",
            data: {
                pageTitle: 'Home'
            }
        })
        .state('home.main', {
            url: "/main",
            templateUrl: "app/components/home/views/home.html",
            controller: 'HomeController',
            controllerAs: 'vm',
            data: {
                pageTitle: 'Home'
            }
            // resolve: {
            //     loadPlugin: function ($ocLazyLoad) {
            //         return $ocLazyLoad.load([
            //             {
            //                 name: 'ui.select',
            //                 files: ['assets/libs/plugins/ui-select/select.min.js', 'assets/css/plugins/ui-select/select.min.css']
            //             }
            //         ]);
            //     }
            // }
        })
  }
})();
