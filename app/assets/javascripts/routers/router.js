App.Routers.Router = Support.SwappingRouter.extend({

  initialize : function(options) {
    this.el = options.$rootEl;
    this.notebooks = new App.Collections.Notebooks();
  },

  routes : {
    "" : "notebooksIndex",
    "notebooks/:id" : "notebookShow"
  },

  notebooksIndex : function() {
    this.notebooks.fetch();
    var view = new App.Views.NotebooksIndex({ collection: this.notebooks });
    this.swap(view);
  },

  notebookShow : function(id) {
    var notebook = this.notebooks.getOrFetch(id);
    var view = new App.Views.NotebookShow({ model: notebook });
    this.swap(view);
  }

})
