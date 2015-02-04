App.Views.NotesIndex = Support.CompositeView.extend({
  template: JST["notes/notes_index"],

  initialize : function(options) {
    this.collection = this.model.notes();
    this.listenTo(this.collection, "sync", this.render)
    this.listenTo(this.collection, "add", this.addNote);
  },

  render : function() {
    var content = this.template();
    this.$el.html(content);
    this.collection.each( function(note) { this.addNote(note) }, this);
    this.addNoteForm();
    return this;
  },

  addNote : function(note) {
    var item = new App.Views.NotesIndexItem({ model: note });
    this.appendChildTo(item, ".notes-list");
  },

  addNoteForm : function() {
    var that = this;
    this.appendChildTo(
      new App.Views.NoteForm({
         model: new App.Models.Note(),
         notebooks: new App.Collections.Notebooks([that.model])
      }), ".note-new");
  }

})
