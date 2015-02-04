App.Routers.Router = Support.SwappingRouter.extend({

  initialize : function(options) {
    this.el = options.$rootEl;
    this.notebooks = new App.Collections.Notebooks();
    this.notes = new App.Collections.Notes();
  },

  routes : {
    "" : "notebooksIndex",
    "notebooks/:id" : "notebookShow",
    "notes/:id/edit" : "noteEdit"
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
    // want to be able to create it within a notebook, or create it and then set the notebook
  }

})
