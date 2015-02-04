App.Views.NotebooksIndexItem = Support.CompositeView.extend({
  template: JST["notebooks/notebooks_index_item"],
  tagName: "li",
  className: "notebook-index-item",

  events: {
    "click button.notebook-delete" : "deleteNotebook"
  },

  render: function() {
    var content = this.template({ notebook: this.model });
    this.$el.html(content);
    return this;
  },

  deleteNotebook : function(event) {
    debugger
    this.model.destroy();
    this.leave();
  }

})
