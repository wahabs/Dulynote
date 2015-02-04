App.Views.NotebookShow = Support.CompositeView.extend({
  template: JST["notebooks/notebook_show"],

  render: function() {
    var content = this.template({ notebook: this.model });
    this.$el.html(content);
    this.appendChild(new App.Views.NotesIndex({ model: this.model }));
    return this;
  },

})
