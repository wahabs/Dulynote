App.Routers.Router = Backbone.Router.extend({

  initialize : function(options) {
    this.$rootEl = options.$rootEl;
    this.notebooks = new App.Collections.Notebooks();
  },

  routes : {
    "" : "index"
  },

  index : function() {
    this.notebooks.fetch();
    var indexView = new App.Views.NotebooksIndex({ collection: this.notebooks });
    this._swapView(indexView);
  },

  _swapView : function(newView) {
    this.currentView && this.currentView.remove();
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }

})
