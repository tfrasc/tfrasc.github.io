app.config(function($routeProvider) {
  $routeProvider
    .when('/skills', {
      templateUrl : 'pages/skills.html',
      controller : 'SkillsController'
    })
    .when('/projects', {
      templateUrl : 'pages/projects.html',
      controller : 'ProjectsController'
    })
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller : 'ContactController'
    })
    .when('/info', {
      templateUrl : 'pages/info.html',
      controller : 'InfoController'
    })
    .otherwise({
      redirectTo : 'pages/home.html'
    })
})