App.Views.NotebooksIndex = Support.CompositeView.extend({
  template: JST["notebooks/notebooks_index"],

  initialize : function(options) {
    this.tags = options.tags
    this.listenTo(this.collection, "sync", this.render)
    this.listenTo(this.collection, "add", this.addNotebook);
  },

  render : function() {
    var content = this.template();
    this.$el.html(content);
    this.collection.each( function(notebook) { this.addNotebook(notebook) }, this);
    this.addNotebookForm();
    this.addTags();
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
  },

  addTags : function() {
    this.appendChild(new App.Views.TagsIndex({ collection: this.tags }));
  }

})
