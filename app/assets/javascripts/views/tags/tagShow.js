App.Views.TagShow = Support.CompositeView.extend({
  template: JST["tags/tag_show"],

  render: function() {
    var content = this.template({ tag: this.model });
    this.$el.html(content);
    this.addNotes();
    return this;
  },

  addNotes : function() {
    this.appendChild(new App.Views.NotesIndex({ model: this.model }));
  }

})
