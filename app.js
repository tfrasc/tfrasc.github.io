var app = angular.module("portfolio", [ ]);

app.controller("TabController", function() {
  this.currentTab = 0;
  this.tabs = [
    {
      label: "Home",
      URL: "#"
    },
    {
      label: "Skills",
      URL: "#"
    },
    {
      label: "Porfolio",
      URL: "#"
    },
    {
      label: "Contact",
      URL: "#"
    },
    {
      label: "Info",
      URL: "https://www.google.com"
    }];

  this.setTab = function(tabIndex){
    this.currentTab = tabIndex;
  };

  this.isSet = function(tabIndex){
    return this.currentTab === tabIndex;
  };
});
