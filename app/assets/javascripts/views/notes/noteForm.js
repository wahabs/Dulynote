App.Views.NoteForm = Backbone.View.extend({
  template: JST["notes/note_form"],

  events: {
    "submit #note-form" : "createNote"
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
    var note = new App.Models.Note();
    note.set(formData);
    note.set("ord", that.model.notes().nextOrd());
    note.set("notebook_id", that.model.id)
    note.save({}, {
      success: function() {
        that.model.notes().add(note, { merge: true });
        Backbone.history.navigate("notebooks/" + note.get("notebook_id"), { trigger: true })
      }
    });
  }

})
