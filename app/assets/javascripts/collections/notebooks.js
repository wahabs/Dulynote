App.Collections.Notebooks = Backbone.Collection.extend({
  url: "api/notebooks",
  model: App.Models.Notebook,
  comparator: "ord",

  notes : function() {
    var that = this;
    if (!that._notes) {
      that._notes = new App.Collections.Notes();
      that.each(function(notebook) {
        that._notes.add(notebook.notes().toJSON(), { silent: true });
      })
    }
    return that._notes;
  },

  getOrFetch : function(id) {
    var notebook = this.get(id);

    if (!notebook) {
      notebook = new App.Models.Notebook({ id: id });
      notebook.fetch({
        success: function() { this.add(notebook); }.bind(this)
      });
    } else {
      notebook.fetch();
    }

    return notebook;
  },

  nextOrd : function() {
    var lastOrd = Math.max.apply(null, this.pluck("ord"));
    return (lastOrd < 0) ? 0 : lastOrd + 1;
  }

})
