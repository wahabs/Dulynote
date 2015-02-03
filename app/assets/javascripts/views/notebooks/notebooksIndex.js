App.Views.NotebooksIndex = Backbone.View.extend({
  template: JST["notebooks/notebooks_index"],

  initialize : function(options) {
    this.listenTo(this.collection, "sync", this.render)
  },

  render : function() {
    var content = this.template({ notebooks: this.collection });
    this.$el.html(content);
    return this;
  }

})
