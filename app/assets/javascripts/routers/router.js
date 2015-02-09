  App.Routers.Router = Backbone.Router.extend({

  initialize : function(options) {
    this.els = {
      "#content" : options.$rootEl,
      "#sidebar" : options.$sideEl
    };
    this.notebooks = new App.Collections.Notebooks();
    this.notes = new App.Collections.Notes();
    this.tags = new App.Collections.Tags();
    this.currentViews = {};
    
  },

  routes : {
    "" : "notebooksIndex",
    "notebooks" : "notebooksIndex",
    "notebooks/:id" : "notebookShow",
    "notes/new" : "noteNew",
    "notes/:id/edit" : "noteEdit",
    "tags/:id" : "tagShow"
  },

  notebooksIndex : function() {
    this.notebooks.fetch();
    this.tags.fetch();
    var view = new App.Views.NotebooksIndex({
      collection: this.notebooks, tags: this.tags
    });
    this.swapView(view, "#sidebar");
  },

  notebookShow : function(id) {
    var notebook = this.notebooks.getOrFetch(id);
    var view = new App.Views.NotebookShow({ model: notebook });
    this.swapView(view, "#sidebar");
  },

  noteEdit : function(id) {
    this.notebooks.fetch();
    this.tags.fetch();
    var note = this.notes.getOrFetch(id);
    var view = new App.Views.NoteEdit({
      model: note, notebooks: this.notebooks, tags: this.tags
    });
    this.swapView(view, "#content");
  },

  tagShow : function(id) {
    var tag = this.tags.getOrFetch(id);
    var view = new App.Views.TagShow({ model: tag });
    this.swapView(view, "#sidebar");
  },

  swapView : function(newView, selector) {
    if (this.currentViews[selector] && this.currentViews[selector].leave) {
      this.currentViews[selector].leave();
    }

    this.currentViews[selector] = newView;
    $(this.els[selector]).html(this.currentViews[selector].render().el);

    if (this.currentViews[selector] && this.currentViews[selector].swapped) {
      this.currentViews[selector].swapped();
    }
  }

})
