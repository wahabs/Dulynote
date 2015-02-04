App.Views.NotebooksIndex = Support.CompositeView.extend({
  template: JST["notebooks/notebooks_index"],

  initialize : function(options) {
    this.listenTo(this.collection, "sync remove", this.render)
    this.listenTo(this.collection, "add", this.addNotebook);
  },

  render : function() {
    var content = this.template();
    this.$el.html(content);
    this.collection.each( function(notebook) { this.addNotebook(notebook) }, this);
    this.addNotebookForm();
    return this;
  },

  addNotebook : function(notebook) {
    var item = new App.Views.NotebooksIndexItem({ model: notebook });
    this.appendChildTo(item, ".notebooks-list");
  },

  addNotebookForm : function() {
    this.appendChildTo(
      new App.Views.NotebookForm({ collection: this.collection}), ".notebook-new"
    );
  }

})
