App.Views.NoteForm = Backbone.View.extend({
  template: JST["notes/note_form"],

  initialize : function(options) {
    // expecting note model
    this.notebooks = options.notebooks;
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    "submit #note-form" : "submitNote"
  },

  render : function() {
    var content = this.template({ note: this.model, notebooks: this.notebooks });
    this.$el.html(content);
    if (this.notebooks.length === 1) {
      this.$('.notebook-select').prop("hidden", true);
    }
    return this;
  },

  submitNote : function(event) {
    event.preventDefault();
    var that = this;
    var formData = $(event.currentTarget).serializeJSON();
    that.model.set(formData);
    var notebook = this.notebooks.getOrFetch(that.model.get("notebook_id"));
    that.model.set("ord", notebook.notes().nextOrd());
    that.model.save({}, {
      success: function() {
        notebook.notes().add(that.model, { merge: true });
        Backbone.history.navigate("notebooks/" + notebook.id, { trigger: true })
      }
    });
  }

})
