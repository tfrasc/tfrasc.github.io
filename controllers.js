app.controller("TabController", function() {
  this.currentTab = 0;
  this.tabs = [
    {
      label: "Home",
      URL: "#/home"
    },
    {
      label: "Skills",
      URL: "#/skills"
    },
    {
      label: "Portfolio",
      URL: "#/portfolio"
    },
    {
      label: "Contact",
      URL: "#/contact"
    },
    {
      label: "Info",
      URL: "#/info"
    }];

  this.setTab = function(tabIndex){
    this.currentTab = tabIndex;
  };

  this.isSet = function(tabIndex){
    return this.currentTab === tabIndex;
  };
});

app.controller("HomeController", function() {

});

app.controller("SkillsController", function() {
  this.languages = [
    {
      name: "C/C++",
      skillLevel: "Advanced",
      libraries: [
        {
          name: "SDL",
          skillLevel: "Intermediate"
        },
        {
          name: "STL",
          skillLevel: "Intermediate"
        }
      ]
    },
    {
      name: "Javascript",
      skillLevel: "Intermediate",
      libraries: [
        {
          name: "AngularJS",
          skillLevel: "Beginner"
        },
        {
          name: "jQuery",
          skillLevel: "Intermediate"
        }
      ]
    },
    {
      name: "Ruby",
      skillLevel: "Intermediate",
      libraries: [ { name: "Ruby on Rails", skillLevel: "Exposure"} ]      
    },
    {
      name: "SQL (MSSQL)",
      skillLevel: "Intermediate"     
    },
    {
      name: "PHP",
      skillLevel: "Beginner",    
    },
    {
      name: "Python",
      skillLevel: "Intermediate"  
    },
    {
      name: "HTML/CSS",
      skillLevel: "Advanced",
      libraries: [ { name: "Bootstrap", skillLevel: "Intermediate"} ]      
    },
    {
      name: "C#",
      skillLevel: "Beginner",
      libraries: [ { name: "WPF", skillLevel: "Beginner"} ]      
    },
    {
      name: "C#",
      skillLevel: "Beginner",
      libraries: [ { name: "WPF", skillLevel: "Beginner"} ]      
    },
    {
      name: "Lua",
      skillLevel: "Beginner",
      libraries: [ { name: "Love", skillLevel: "Beginner"} ]      
    }
  ];
});

app.controller("PortfolioController", function() {

});

app.controller("ContactController", function() {

});

app.controller("InfoController", function() {

});