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

  //fix bug for highlighting correct tab after reloading
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
      name: "Javascript",
      skillLevel: "Advanced",
      libraries: [
        {
          name: "jQuery",
          skillLevel: "Advanced"
        },
        {
          name: "AngularJS",
          skillLevel: "Beginner"
        },
        {
          name: "React",
          skillLevel: "Intermediate"
        },
        {
          name: "React-Native",
          skillLevel: "Intermediate"
        },
        {
          name: "Node.js",
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
      name: "C/C++",
      skillLevel: "Advanced",
      libraries: [
        {
          name: "SDL",
          skillLevel: "Intermediate"
        },
        {
          name: "OpenGL",
          skillLevel: "Intermediate"
        },
        {
          name: "STL",
          skillLevel: "Intermediate"
        },
        {
          name: "MPI",
          skillLevel: "Beginner"
        }
      ]
    },
    {
      name: "SQL",
      skillLevel: "Intermediate",
      libraries: [
        {
          name: "PostgreSQL",
          skillLevel: "Intermediate"
        },
        {
          name: "MSSQL",
          skillLevel: "Beginner"
        }
      ]
    },
    {
      name: "noSQL",
      skillLevel: "Beginner",
      libraries: [ { name: "MongoDB", skillLevel: "Beginner" } ]
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
          skillLevel: "Beginner"
        },
        {
          name: "AWT",
          skillLevel: "Beginner"
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
    name: "OSX Development",
    skillLevel: "Intermediate"
  },
  {
    name: "Linux Development",
    skillLevel: "Intermediate",
    libraries: [
      {
        name: "Ubuntu",
        skillLevel: "Intermediate"
      }
    ]
  },
  {
    name: "iOS Development",
    skillLevel: "Intermediate",
    libraries: [
      {
        name: "Ionic",
        skillLevel: "Beginner"
      },
      {
        name: "React-Native",
        skillLevel: "Intermediate"
      }
    ]
  },
  {
    name: "Android Development",
    skillLevel: "Beginner",
    libraries: [ { name: "React-Native", skillLevel: "Intermediate" } ]
  },
  {
    name: "Windows Development",
    skillLevel: "Intermediate",
    libraries: [
      {
        name: "Visual Studio",
        skillLevel: "Intermediate"
      }
    ]
  },
  {
    name: "API Development",
    skillLevel: "Intermediate"
  },
  {
    name: "3rd-Party API Integrations",
    skillLevel: "Intermediate"
  },
  {
    name: "MVC Architecture",
    skillLevel: "Intermediate"
  },
  {
    name: "Agile Development",
    skillLevel: "Intermediate"
  },
  {
    name: "Git",
    skillLevel: "Intermediate"
  },
  {
    name: "Heroku",
    skillLevel: "Intermediate"
  },
  {
    name: "LAMP Stack",
    skillLevel: "Beginner"
  },
  {
    name: "Unity Game Engine",
    skillLevel: "Beginner"
  }
  ];

  // this.interests = [
  //   {
  //     name: "Pentesting/Hacking",
  //     skillLevel: "Beginner",
  //     libraries: [ { name: "Kali/Backtrack Linux", skillLevel: "Beginner" } ]
  //   },
  //   {
  //     name: "Modding",
  //     skillLevel: "Intermediate"
  //   }
  // ]
});

app.controller("ProjectsController", function() {
  this.toggleShowing = function($index) {
    this.projects[$index].isShowing = !this.projects[$index].isShowing;
  };

  this.projects = [
    {
      name: "memeO (iOS App)",
      links: [ "https://tfrasc.github.io/memeO/",
               "https://itunes.apple.com/us/app/memeo/id1287902877?mt=8"
             ],
      pictures: [ "pages/pictures/memeO_icon.png",
                //  "pages/pictures/taylorsmugs.png"
                 ],
      description: "memeO is a meme and dating app all in one.",
      goals:  [ "Develop an entire iOS app from scratch",
                "Expand knowledge of React-Native and app development",
                "Gain experience with having an app on the App Store (deployments and updates)",
                "Design a mobile UI and continue to improve it",
                "Integrate Twilio (SMS), Slack (Admin Notifications), Giphy (Gif keyboard), and Github (Contact functionality automatically creates new Issue)",
                "Implement Push Notifications through Apple's APNs",
                "Accept and implement user feedback",
              ],
      todos:  [ "Further optimize and clean up code",
                "Build out Android version",
                "Add App Store rating modal",
                "Add filtering based on Geolocation",
                "Implement more fun features and memes"
              ],
      languages: ["Ruby", "Ruby on Rails", "Javascript", "React-Native", "PostgreSQL"],
      customSyle: "width: 100px;",
      isShowing: false
    },
    {
      name: "Taylor's Mugs (Website) *Redux",
      links: [ "https://taylorsmugs.herokuapp.com/",
               "https://github.com/tfrasc/taylorsmugs"
             ],
      pictures: [ "pages/pictures/taylorsmugsnew.png",
                //  "pages/pictures/taylorsmugs.png"
                 ],
      description: "Custom website for local artist who paints and sells coffee mugs",
      goals:  [ "Develop a simple, full-scale Rails app",
                "Create a mobile-friendly site",
                "Gain experience with automation and deployments via Heroku",
                "Implement an online payment system (Stripe)",
                "Use AWS S3 Storage (Production image storage)",
                "Create Admin view to track payments and deliveries (eCommerce functionality)",
              ],
      todos:  [ "Fix HTML5 image dropper with mug/wine/shot glass template",
                "Implement emails (Rails Mailer) and/or SMS (Twilio) to notify admin and user of order",
                "Add option for wine and shot glasses",
                "Make a better favicon",
                "Add fun/fancy ui (order counter, etc.)"
              ],
      languages: ["Ruby", "Ruby on Rails", "HTML5/CSS3", "Javascript", "jQuery", "PostgreSQL"],
      isShowing: false
    },
    {
      name: "Radio Reddit (Google Chrome Extension)",
      links: [ "https://chrome.google.com/webstore/detail/radio-reddit/obekklljliecihelobpanjffdpfagjlj",
               "https://github.com/tfrasc/Radio-Reddit-Chrome-Extension"
             ],
      pictures: [ "pages/pictures/RadioReddit.png" ],
      description: "Google Chrome Extension for Reddit to continuously play music on music subreddits",
      goals:  [ "Create a better user experience for a popular website",
                "Dabble in browser extension programming",
                "Create a product for others to use and enjoy"
              ],
      todos:  [ "Integrate Youtube, Bandcamp, Mixcloud and other API's for plugin",
                "Add better styling and get new icon",
                "Add more functionality (such as opening song in new tab)"
              ],
      languages: ["Javascript", "jQuery"],
      isShowing: false
    },
    {
      name: "googlePlacesParser (Open Source Javascript Project)",
      links: [ "https://github.com/tfrasc/googlePlacesParser" ],
      // pictures: [ "pages/pictures/taylorsmugs1.png" ],
      description: "Simple script to grab Google Places results from input box and parse the results into a simpler format to grab each component (e.g. street, country, etc.)",
      goals:  [ "Create an open source project for the community to use and contribute to",
                "Create a simple solution to a software problem that wasn't previously solved"
              ],
      todos:  [ "Figure out how to fire the display on the first click of button (might be a timing delay getting the results back from the Google API)",
                "Fix phone number and vicinity (if possible)",
                "Error handling and validation"
              ],
      languages: ["Javascript", "jQuery", "HTML/CSS"],
      isShowing: false
    },
    {
      name: "Portfolio Website (this)",
      //pictures: [ "pages/pictures/portfolio.png" ],
      description: "Website to display my projects and skills",
      goals:  [ "Develop a website using newer frameworks and libraries (AngularJS and Bootstrap)",
                "Consolidate Projects and Skills I've done",
                "Map out future Projects and Skills I plan to work on",
                "Create a Single Page Application"
              ],
      todos:  [ "Link languages in Skills to filtered Projects",
                "Add carousel to display multiple pictures for Projects",
                "Consider adding Interests section",
                "Add future Skills/Projects"
              ],
      languages: ["HTML/CSS", "Bootstrap", "Javascript", "AngularJS"],
      isShowing: false
    },
    {
      name: "Taylor's Mugs (Website) *Legacy",
      links: [ "https://taylorsmugs.github.io/",
               "https://github.com/taylorsmugs/taylorsmugs.github.io"
             ],
      pictures: [ "pages/pictures/taylorsmugs.png" ],
      description: "Custom website for local artist who paints and sells coffee mugs",
      goals:  [ "Develop a website from scratch without CSS libraries",
                "Experiment with jQuery and AJAX",
                "Get exposure to an API for a popular social media site (Instagram)",
                "Experiment with the opportunity to use other people's work from GitHub (Formspree)"
              ],
      todos:  [ "Implement Twitter API",
                "Add comment capability",
                "Migrate to React (or another hip JS framework)",
                "Add shopping cart w/ Customizable mug template"
              ],
      languages: ["HTML/CSS", "Javascript", "jQuery"],
      isShowing: false
    },
    {
      name: "Drain (Unity Game)",
      pictures: [ "pages/pictures/Drain.png" ],
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
      links: [ "https://github.com/tfrasc/1080App" ],
      pictures: [ "pages/pictures/1080app.png" ],
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
      URL: "https://www.linkedin.com/in/tyler-frasca-92083bb9",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      URL: "https://github.com/tfrasc",
      icon: "github"
    },
    {
      name: "Stack Overflow",
      URL: "http://stackoverflow.com/users/5561398/tfrasc",
      icon: "stack-overflow"
    }
  ]
});
