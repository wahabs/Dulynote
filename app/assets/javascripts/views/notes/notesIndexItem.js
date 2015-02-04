App.Views.NotesIndexItem = Support.CompositeView.extend({
  template: JST["notes/notes_index_item"],
  tagName: "li",
  className: "note-index-item",

  events: {
    "click button.note-delete" : "deleteNote"
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
  }

})
