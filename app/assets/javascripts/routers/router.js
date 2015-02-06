App.Routers.Router = Support.SwappingRouter.extend({

  initialize : function(options) {
    this.el = options.$rootEl;
    this.notebooks = new App.Collections.Notebooks();
    this.notes = new App.Collections.Notes();
    this.tags = new App.Collections.Tags();
  },

  routes : {
    "" : "notebooksIndex",
    "notebooks/:id" : "notebookShow",
    "notes/:id/edit" : "noteEdit",
    "notes/new" : "noteNew",
    "tags/:id" : "tagShow"
  },

  notebooksIndex : function() {
    this.notebooks.fetch();
    this.tags.fetch();
    var view = new App.Views.NotebooksIndex({ collection: this.notebooks, tags: this.tags });
    this.swap(view);
  },

  notebookShow : function(id) {
    var notebook = this.notebooks.getOrFetch(id);
    this.tags.fetch();
    var view = new App.Views.NotebookShow({ model: notebook });
    this.swap(view);
  },

  noteEdit : function(id) {
    this.notebooks.fetch();
    var note = this.notes.getOrFetch(id);
    var view = new App.Views.NoteForm({ model: note, notebooks: this.notebooks });
    this.swap(view);
  },

  noteNew : function() {
    this.notebooks.fetch();
    var note = new App.Models.Note();
    var view = new App.Views.NoteForm({ model: note, notebooks: this.notebooks });
    this.swap(view);
  },

  tagShow : function(id) {
    var tag = this.tags.getOrFetch(id);
    var view = new App.Views.TagShow({ model: tag });
    this.swap(view);
  }

})
