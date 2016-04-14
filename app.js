var app = angular.module("portfolio", [ ]);

app.controller("TabController", function() {
  this.tabs = [
    {
      label: "Home"
    },
    {
      label: "Skills"
    },
    {
      label: "Porfolio"
    },
    {
     label: "Contact"
    },
    {
     label: "Info"
    }];
});
