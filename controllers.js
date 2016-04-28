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
      label: "Projects",
      URL: "#/projects"
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
      name: "Lua",
      skillLevel: "Beginner",
      libraries: [ { name: "Love", skillLevel: "Beginner"} ]      
    }
  ];

  this.software = [
  {
    name: "Linux",
    skillLevel: "Intermediate",
    libraries: [
      {
        name: "Ubuntu",
        skillLevel: "Intermediate"
      },
      {
        name: "Backtrack/Kali",
        skillLevel: "Beginner"
      }
    ]
  },
  {
    name: "Git",
    skillLevel: "Intermediate"
  },
  {
    name: "Visual Studio",
    skillLevel: "Intermediate"
  }
  ];
});

app.controller("ProjectsController", function() {
  this.projects = [
    {
      name: "Taylor's Mugs (Website)",
      link: "https://taylorsmugs.github.io/",
      picture: "pages/pictures/taylorsmugs1.PNG",
      description: "Custom website for a friend who paints and sells coffee mugs",
      goals: "Develop a website from scratch without CSS libraries, "
              + "experiment with jQuery and AJAX, "
              + "and get exposure to an API for a popular social media site (Instagram)",
      languages: ["HTML/CSS", "Javascript", "jQuery"]
    },
    {
      name: "1080 App (C# WPF Application)",
      link: "https://github.com/tfrasc/1080App",
      description: "App to show off beta items of 1080 Avalanche Gamecube game",
      goals: "Develop an application with C# and WPF, "
              + "venture outside of Linux development, "
              + "and show off the cool stuff I've found in my favorite game",
      languages: ["C#", "WPF"]
    }
  ];
});

app.controller("ContactController", function() {

});

app.controller("InfoController", function() {

});