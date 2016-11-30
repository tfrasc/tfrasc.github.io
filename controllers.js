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

  if(window.location.href.indexOf('resume') > 0) {
    this.currentTab = 1;
  }
  else if(window.location.href.indexOf('skills') > 0) {
    this.currentTab = 2;
  }
  else if(window.location.href.indexOf('projects') > 0) {
    this.currentTab = 3;
  }
  else if(window.location.href.indexOf('profiles') > 0) {
    this.currentTab = 4;
  }
});


app.controller("ResumeController", function() {

});

app.controller("SkillsController", function() {
  this.languagesShowing = true;
  this.softwareShowing = true;

  this.toggleShowing = function(category) {
    if(category === 'languages') {
      this.languagesShowing = !this.languagesShowing;
    }
    else {
      this.softwareShowing = !this.softwareShowing;
    }
  };

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
          name: "OpenGL",
          skillLevel: "Beginner"
        },
        {
          name: "STL",
          skillLevel: "Intermediate"
        }
      ]
    },
    {
      name: "Javascript",
      skillLevel: "Advanced",
      libraries: [
        {
          name: "jQuery",
          skillLevel: "Advanced"
        },
        {
          name: "Node.js",
          skillLevel: "Beginner"
        },
        {
          name: "AngularJS",
          skillLevel: "Beginner"
        },
        {
          name: "ReactJS",
          skillLevel: "Beginner"
        }
      ]
    },
    {
      name: "Ruby",
      skillLevel: "Advanced",
      libraries: [ { name: "Ruby on Rails", skillLevel: "Intermediate"} ]
    },
    {
      name: "HTML5/CSS3",
      skillLevel: "Advanced",
      libraries: [
        {
          name: "Bootstrap",
          skillLevel: "Intermediate"
        },
        {
          name: "SASS",
          skillLevel: "Intermediate"
        }
      ]
    },
    {
      name: "SQL/noSQL",
      skillLevel: "Intermediate",
      libraries: [
        {
          name: "PostgreSQL",
          skillLevel: "Intermediate"
        },
        {
          name: "MongoDB",
          skillLevel: "Beginner"
        },
        {
          name: "MSSQL",
          skillLevel: "Beginner"
        }
      ]
    },
    {
      name: "PHP",
      skillLevel: "Beginner"
    },
    {
      name: "Python",
      skillLevel: "Intermediate"
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
    name: "Linux Development/Pentesting",
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
    name: "OSX Development",
    skillLevel: "Intermediate"
  },
  {
    name: "Agile Development",
    skillLevel: "Intermediate"
  },
  {
    name: "MVC Architecture",
    skillLevel: "Intermediate"
  },
  {
    name: "Git",
    skillLevel: "Intermediate"
  },
  {
    name: "Heroku",
    skillLevel: "Beginner"
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
  this.toggleShowing = function($index) {
    this.projects[$index].isShowing = !this.projects[$index].isShowing;
  };

  var init = function () {
     // check if there is query in url
     // and fire search in case its value is not empty
     var slider = new IdealImageSlider.Slider({
         selector: '#slider',
         height: 400, // Required but can be set by CSS
         interval: 4000
     });
     slider.start();
     console.log("SLIDER");
     console.log(slider);
   };
  // and fire it after definition
  init();

  this.projects = [
    {
      name: "Taylor's Mugs (Website) *Redux",
      link: "https://taylorsmugs.herokuapp.com/" ,
      pictures: [ "pages/pictures/taylorsmugsnew.png",
                //  "pages/pictures/taylorsmugs.png"
                 ],
      description: "Custom website for local artist who paints and sells coffee mugs",
      goals:  [ "Develop a simple full-scale rails app",
                "Create a mobile-friendly site",
                "Gain experience with automation and deployments via Heroku"
              ],
      todos:  [ "Implement online payment (WePay API)",
                "Fix HTML5 image dropper with mug/wine/shot glass template",
                "Implement emails to notify admin and user of order",
                "Create admin view to track payments and deliveries",
                "Add option for wine and shot glasses",
                "Add fun/fancy ui (order counter, etc.)"
              ],
      languages: ["Ruby", "Ruby on Rails", "HTML5/CSS3", "Javascript", "jQuery", "PostgreSQL"],
      isShowing: false
    },
    {
      name: "Reddit Continuous Music Plugin (Google Chrome Extension)",
      link: "https://github.com/tfrasc/RES-Continuous-Music-Extension",
      // pictures: [ "pages/pictures/taylorsmugs1.PNG" ],
      description: "Google Chrome Extension for Reddit to continuously play music on music subreddits",
      goals:  [ "Create a better user experience for a popular website",
                "Dabble in browser extension programming",
                "Create a simple solution to a software problem that wasn't previous solved"
              ],
      todos:  [ "Integrate Youtube, Bandcamp, Mixcloud and other API's for plugin",
                "Submit to Chrome Extension Store after YouTube API implementation",
                "Integrate Play/Pause commands from popup attached to button"
              ],
      languages: ["Javascript", "jQuery"],
      isShowing: false
    },
    {
      name: "googlePlacesParser (Open Source Javascript Project)",
      link: "https://github.com/tfrasc/googlePlacesParser",
      // pictures: [ "pages/pictures/taylorsmugs1.PNG" ],
      description: "Simple script to grab Google Places results from input box and parse the results into a simpler format to grab each component (e.g. street, country, etc.)",
      goals:  [ "Create an open source project for the community to use and contribute to",
                "Create a simple solution to a software problem that wasn't previous solved"
              ],
      todos:  [ "Figure out how to fire the display on the first click of button (might be a timing delay getting the results back from the Google API)",
                "Fix phone number and vicinity (if possible)",
                "Error handling and validation"
              ],
      languages: ["Javascript", "jQuery", "HTML/CSS"],
      isShowing: false
    },
    {
      name: "Portfolio Website ($(this))",
      //pictures: [ "pages/pictures/portfolio.PNG" ],
      description: "Website to display my projects and skills",
      goals:  [ "Develop a website using newer frameworks and libraries (AngularJS and Bootstrap)",
                "Consolidate Projects and Skills I've done",
                "Map out future Projects and Skills I will work on"
              ],
      todos:  [ "Link languages in Skills to filtered Projects",
                "Add carousel to display multiple Projects pictures",
                "Add Experience column to Skills",
                "Add future Skills/Projects"
              ],
      languages: ["HTML/CSS", "Bootstrap", "Javascript", "AngularJS"],
      isShowing: false
    },
    {
      name: "Taylor's Mugs (Website) *Legacy",
      link: "https://taylorsmugs.github.io/",
      pictures: [ "pages/pictures/taylorsmugs.png" ],
      description: "Custom website for local artist who paints and sells coffee mugs",
      goals:  [ "Develop a website from scratch without CSS libraries",
                "Experiment with jQuery and AJAX",
                "Get exposure to an API for a popular social media site (Instagram)",
                "Experiment with the opportunity to use other people's work from GitHub (Formspree)"
              ],
      todos:  [ "Implement Twitter API",
                "Add comment capability",
                "Migrate to ReactJS (or another hip JS framework)",
                "Add shopping cart w/ Customizable mug template"
              ],
      languages: ["HTML/CSS", "Javascript", "jQuery"],
      isShowing: false
    },
    {
      name: "Drain (Unity Game)",
      pictures: [ "pages/pictures/Drain.PNG" ],
      description: "Small top-down puzzle game with goal of getting marble down the drain",
      goals:  [ "Get exposure to a popular game engine (Unity)",
                "Venture into game development with C#",
                "Better understand game development process"
              ],
      todos: ["Add more levels", "Add music/sound effects", "Add scoring system"],
      languages: ["C#"],
      isShowing: false
    },
    {
      name: "1080 App (C# WPF Application)",
      link: "https://github.com/tfrasc/1080App",
      pictures: [ "pages/pictures/1080app.PNG" ],
      description: "App to show off beta items of 1080 Avalanche Gamecube game",
      goals:  [ "Develop an application with C# and WPF",
                "Venture outside of Linux development",
                "Show off the cool stuff I've found in my favorite game"
              ],
      todos: ["Complete animations", "Add pictures of beta items"],
      languages: ["C#", "WPF"],
      isShowing: false
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
