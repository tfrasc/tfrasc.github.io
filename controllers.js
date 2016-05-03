app.controller("HomeController", function() {

});

app.controller("TabController", function() {
  this.currentTab = 0;
  this.tabs = [
    {
      label: "Home",
      URL: ""
    },
    {
      label: "Resume",
      URL: "#/resume"
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
      label: "Profiles",
      URL: "#/profiles"
    }];

  this.setTab = function(tabIndex){
    this.currentTab = tabIndex;
  };

  this.isSet = function(tabIndex){
    return this.currentTab === tabIndex;
  };
});


app.controller("ResumeController", function() {

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
      name: "Java",
      skillLevel: "Intermediate",
      libraries: [
        {
          name: "Swing",
          skillLevel: "Intermediate"
        },
        {
          name: "AWT",
          skillLevel: "Intermediate"
        }
      ]
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
    name: "LAMP Stack",
    skillLevel: "Beginner"
  },
  {
    name: "Visual Studio",
    skillLevel: "Intermediate"
  },
  {
    name: "Unity Game Engine",
    skillLevel: "Beginner"
  }
  ];
});

app.controller("ProjectsController", function() {
  this.projects = [
    {
      name: "Taylor's Mugs (Website)",
      link: "https://taylorsmugs.github.io/",
      picture: "pages/pictures/taylorsmugs1.PNG",
      description: "Custom website for local artist who paints and sells coffee mugs",
      goals:  [ "Develop a website from scratch without CSS libraries",
                "Experiment with jQuery and AJAX",
                "Get exposure to an API for a popular social media site (Instagram)",
                "Experiment with the opportunity to use other people's work from GitHub (Formspree)"
              ],
      todos:  [ "Implement Twitter API",
                "Migrate to ReactJS (or another new JS framework)",
                "Add shopping cart w/ Customizable mug template"
              ],
      languages: ["HTML/CSS", "Javascript", "jQuery"]
    },
    {
      name: "Portfolio Website ($this)",
//      picture: "pages/pictures/portfolio.PNG",
      description: "Website to display projects and skills",
      goals:  [ "Develop a website using newer frameworks and libraries (AngularJS and Bootstrap)",
                "Consolidate Projects and Skills I've done",
                "Map out future Projects and Skills I will work on"
              ],
      todos:  [ "Link languages in Skills to filtered Projects",
                "Add Experience column to Skills",
                "Add future Skills/Projects",
                "Make Projects/Skills collapsable"
              ],
      languages: ["HTML/CSS", "Bootstrap", "Javascript", "AngularJS"]
    },
    {
      name: "1080 App (C# WPF Application)",
      link: "https://github.com/tfrasc/1080App",
      picture: "pages/pictures/1080app.PNG",
      description: "App to show off beta items of 1080 Avalanche Gamecube game",
      goals:  [ "Develop an application with C# and WPF",
                "Venture outside of Linux development",
                "Show off the cool stuff I've found in my favorite game"
              ],
      todos: ["Complete animations", "Add pictures of beta items"],
      languages: ["C#", "WPF"]
    },
    {
      name: "Drain (Unity Game)",
      picture: "pages/pictures/Drain.PNG",
      description: "Small eagle-eye puzzle game with goal of getting marble down the drain",
      goals:  [ "Get exposure to a popular game engine (Unity)",
                "Venture into game development with C#",
                "Better understand game development process"
              ],
      todos: ["Add more levels", "Add music/sound effects", "Add scoring system"],
      languages: ["C#"]
    }
  ];
});

app.controller("ProfileController", function() {
  this.profiles = [
    {
      name: "LinkedIn",
      URL: "https://www.linkedin.com/in/tyler-frasca-92083bb9?trk=nav_responsive_tab_profile",
      picture: "pages/pictures/logo-linkedin.svg"
    },
    {
      name: "GitHub",
      URL: "https://github.com/tfrasc",
      picture: "pages/pictures/github.png"
    },
    {
      name: "Stack Overflow",
      URL: "http://stackoverflow.com/users/5561398/tfrasc",
      picture: "pages/pictures/icon-stackoverflow.svg"
    }    
  ]
});
