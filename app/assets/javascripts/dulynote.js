window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    App.eventBus = new _.extend({}, Backbone.Events);

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
