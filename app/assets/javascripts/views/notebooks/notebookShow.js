App.Views.NotebookShow = Support.CompositeView.extend({
  template: JST["notebooks/notebook_show"],

  render: function() {
    var content = this.template({ notebook: this.model });
    this.$el.html(content);
    this.addNotes();
    return this;
  },

  addNotes : function() {
    this.appendChild(new App.Views.NotesIndex({ model: this.model }));
  },

  // addTags : function() {
  //   this.appendChildTo(new App.Views.TagsIndex({ }), ".tags-list");
  // }

})
