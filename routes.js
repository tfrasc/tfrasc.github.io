app.config(function($routeProvider) {
  $routeProvider
    .when('#/home', {
      templateUrl : 'pages/home.html',
      controller : 'HomeController'
    })
    .when('#/skills', {
      templateUrl : 'pages/skills.html',
      controller : 'SkillsController'
    })
    .when('#/portfolio', {
      templateUrl : 'pages/portfolio.html',
      controller : 'PortfolioController'
    })
    .when('#/contact', {
      templateUrl : 'pages/contact.html',
      controller : 'ContactController'
    })
    .when('#/info', {
      templateUrl : 'pages/info.html',
      controller : 'InfoController'
    })
})