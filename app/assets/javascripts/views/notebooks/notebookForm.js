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
    var formData = $(event.currentTarget).serializeJSON();
    var notebook = new App.Models.Notebook();
    notebook.set(formData);
    // need to add ord and current_user.id
    notebook.save({}, {
      success: function() {
        // need to add to collection and remember to merge: true
         Backbone.history.navigate("api/notebook/" + notebook.id, { trigger: true })
      }
    });
  }

})
