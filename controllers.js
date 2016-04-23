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
      label: "Porfolio",
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

});

app.controller("PortfolioController", function() {

});

app.controller("ContactController", function() {

});

app.controller("InfoController", function() {

});