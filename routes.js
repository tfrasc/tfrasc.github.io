app.config(function($routeProvider) {
  $routeProvider
    .when('/skills', {
      templateUrl : 'pages/skills.html',
      controller : 'SkillsController'
    })
    .when('/resume', {
      templateUrl : 'pages/resume.html',
      controller : 'ResumeController'
    })
    .when('/projects', {
      templateUrl : 'pages/projects.html',
      controller : 'ProjectsController'
    })
    .when('/profiles', {
      templateUrl : 'pages/profiles.html',
      controller : 'ProfileController'
    })
    .otherwise({
      templateUrl : 'pages/home.html',
      controller : "HomeController"
    })
})