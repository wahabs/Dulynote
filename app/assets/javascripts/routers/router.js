  App.Routers.Router = Backbone.Router.extend({

  initialize : function(options) {
    this.els = {
      "#content" : options.$rootEl,
      "#sidebar" : options.$sideEl
    };
    this.notebooks = new App.Collections.Notebooks();
    this.notes = new App.Collections.Notes();
    this.tags = new App.Collections.Tags();
    this.notebooks.fetch();
    this.notes.fetch();
    this.tags.fetch();
    this.currentViews = {};
  },

  routes : {
    ""               : "notebooksIndex",
    "notebooks"      : "notebooksIndex",
    "notebooks/:id"  : "notebookShow",
    // "notes/:id/edit" : "noteEdit", // replace with App.eventBus.trigger("activateNote", 2) in views
    "tags/:id"       : "tagShow"
  },

  swapNoteFromCookie : function() {

    isNaN(parseInt($.cookie("activeNoteID"))) && $.cookie("activeNoteID", 1);

    var contentView = new App.Views.NoteEdit({
        model: new App.Models.Note(),
        notebooks: this.notebooks,
        tags: this.tags
    });

    this.swapView(contentView, "#content");
  },

  notebooksIndex : function() {
    var sideView = new App.Views.NotebooksIndex({
      collection: this.notebooks, tags: this.tags
    });
    this.swapView(sideView, "#sidebar");
    this.swapNoteFromCookie();
  },

  notebookShow : function(id) {
    var notebook = this.notebooks.getOrFetch(id);
    var view = new App.Views.NotebookShow({ model: notebook });
    this.swapView(view, "#sidebar");
    this.swapNoteFromCookie();
  },

  tagShow : function(id) {
    var tag = this.tags.getOrFetch(id);
    var view = new App.Views.TagShow({ model: tag });
    this.swapView(view, "#sidebar");
    this.swapNoteFromCookie();
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
