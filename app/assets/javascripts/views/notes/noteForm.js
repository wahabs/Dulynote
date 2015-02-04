App.Views.NoteForm = Backbone.View.extend({
  template: JST["notes/note_form"],

  initialize : function(options) {
    // expecting note model
    this.notebooks = options.notebooks;
  },

  events: {
    "submit #note-form" : "submitNote"
  },

  render : function() {
    var content = this.template({ note: this.model, notebooks: this.notebooks });
    this.$el.html(content);
    return this;
  },

  submitNote : function(event) {
    event.preventDefault();
    var that = this;
    var formData = $(event.currentTarget).serializeJSON();
    that.model.set(formData);
    // that.model.set("ord", that.model.notes().nextOrd());
    // that.model.set("notebook_id", that.model.id)
    that.model.save({}, {
      success: function() {
        that.model.notes().add(that.model, { merge: true });
        Backbone.history.navigate("notebooks/" + that.model.get("notebook_id"), { trigger: true })
      }
    });
  }

})
