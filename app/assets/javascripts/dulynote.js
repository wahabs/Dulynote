window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new App.Routers.Router({ $rootEl : $("#content") });
    Backbone.history.start();
  }

};

$(document).ready(function(){
  App.initialize();
});


// window.TrelloClone = {
//   Models: {},
//   Collections: {},
//   Views: {},
//   Routers: {},
//   initialize: function() {
//     $rootEl = $('#main');
//     new TrelloClone.Routers.TrelloRouter($rootEl);
//     Backbone.history.start();
//   }
// };
//
// $(document).ready(function(){
//   TrelloClone.initialize();
// });
