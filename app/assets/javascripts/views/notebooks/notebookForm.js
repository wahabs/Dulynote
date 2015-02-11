App.Views.NotebookForm = Backbone.View.extend({
  template: JST["notebooks/notebook_form"],

  events: {
    "click a" : "createNotebook"
  },

  render : function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createNotebook : function(event) {
    event.preventDefault();
    var that = this;
    var notebook = new App.Models.Notebook({ title: that.$("#title").val() });
    notebook.save({}, {
      success: function() {
        that.collection.add(notebook, { merge: true });
        Backbone.history.navigate("notebook/" + notebook.id, { trigger: true })
      }
    });
  }

})
