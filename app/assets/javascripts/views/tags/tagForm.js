App.Views.TagForm = Backbone.View.extend({
  template: JST["tagss/tag_form"],

  initialize : function(options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    "submit #tag-form" : "submitTag"
  },

  render : function() {
    var content = this.template({ tag: this.model });
    this.$el.html(content);
    return this;
  },

  submitTag : function(event) {
    event.preventDefault();
    var that = this;
    var formData = $(event.currentTarget).serializeJSON();
    that.model.set(formData);
    that.model.save({}, {
      success: function() {
        // notebook.notes().add(that.model, { merge: true });
        Backbone.history.navigate("notebooks/" + notebook.id, { trigger: true })
      }
    });
  }

})
