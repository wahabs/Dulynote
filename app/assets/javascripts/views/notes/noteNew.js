App.Views.NoteNew = Backbone.View.extend({
  template: JST["notes/note_new"],

  events: {
    "click a" : "createNote"
  },

  render : function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createNote : function(event) {
    event.preventDefault();
    var that = this;
    var note = new App.Models.Note({
      title: that.$("#title").val(),
      notebook_id: that.model.id
    });
    note.save({}, {
      success: function() {
        that.collection.add(note, { merge: true });
      }
    });
  }

})
