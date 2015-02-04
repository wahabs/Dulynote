App.Views.NotebookForm = Backbone.View.extend({
  template: JST["notebooks/notebook_form"],

  events: {
    "submit #notebook-form" : "createNotebook"
  },

  render : function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createNotebook : function(event) {
    event.preventDefault();
    var that = this;
    var formData = $(event.currentTarget).serializeJSON();
    var notebook = new App.Models.Notebook();
    notebook.set(formData);
    notebook.set("ord", that.collection.nextOrd());
    notebook.save({}, {
      success: function() {
        that.collection.add(notebook, { merge: true });
        Backbone.history.navigate("notebook/" + notebook.id, { trigger: true })
      }
    });
  }

})
