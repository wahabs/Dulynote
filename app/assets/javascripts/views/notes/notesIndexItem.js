App.Views.NotesIndexItem = Support.CompositeView.extend({
  template: JST["notes/notes_index_item"],
  tagName: "li",
  className: "note-index-item",

  initialize : function(options) {
    this.listenTo(App.eventBus, "updateNote", this.updateNote);
  },

  events: {
    "click .note-delete" : "deleteNote",
    "click a" : "activateNote"
  },

  updateNote : function() {
    this.model.fetch();
    this.render();
  },

  render: function() {
    var content = this.template({ note: this.model });
    this.$el.html(content);
    return this;
  },

  deleteNote : function(event) {
    this.model.destroy();
    this.leave();
    Backbone.history.navigate(
      "notebooks/" + this.model.get("notebook_id"), { trigger: true }
    );
  },

  activateNote : function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).data("id");
    App.eventBus.trigger("activateNote", id);
  }

})
