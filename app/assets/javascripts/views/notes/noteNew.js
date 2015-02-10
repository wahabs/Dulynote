App.Views.NoteNew = Backbone.View.extend({
  template: JST["notes/note_new"],

  events: {
    "submit #note-new" : "createNote"
  },

  render : function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createNote : function(event) {
    event.preventDefault();
    var that = this;
    var formData = $(event.currentTarget).serializeJSON();
    var note = new App.Models.Note({ notebook_id: that.model.id });
    note.set(formData);
    note.save({}, {
      success: function() {
        that.collection.add(note, { merge: true });
      }
    });
  }

})
