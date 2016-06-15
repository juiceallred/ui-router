angular.module('routerApp')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "views/home.html",
        controller: 'mainCtrl'
      })
      .state('home.list', {
        url: "/list",
        templateUrl: "views/home.list.html"
      })
      .state('about' , {
        url: "/about",
        templateUrl: "views/about.html"
      })
      .state('blog', {
        url: "/blog",
        templateUrl: "views/blog.html"
      })
      .state('portfolio', {
        url: "/portfolio",
        templateUrl: "views/portfolio.html"
      })
      .state('contact', {
        url: "/contact",
        templateUrl: "views/contact.html"
      })



  });
