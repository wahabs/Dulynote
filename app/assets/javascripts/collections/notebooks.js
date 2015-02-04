App.Collections.Notebooks = Backbone.Collection.extend({
  url: "api/notebooks",
  model: App.Models.Notebook,
  comparator: "ord",

  getOrFetch : function(id) {
    var notebook = this.get(id);

    if (!notebook) {
      notebook = new TrelloClone.Models.Board({ id: id });
      notebook.fetch({
        success: function() { this.add(notebook); }.bind(this)
      });
    } else {
      notebook.fetch();
    }

    return notebook;
  }


})
