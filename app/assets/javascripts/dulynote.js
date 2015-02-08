window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new App.Routers.Router({
       $rootEl : $("#content"),
       $sideEl : $("#sidebar")
    });
    Backbone.history.start();
  }

};

$(document).ready(function(){
  App.initialize();
});
