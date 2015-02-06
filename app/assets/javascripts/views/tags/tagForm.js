App.Views.TagForm = Backbone.View.extend({
  template: JST["tags/tag_form"],

  events: {
    "submit #tag-form" : "submitTag"
  },

  render : function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submitTag : function(event) {
    event.preventDefault();
    var that = this;
    var note = that.model;
    var tags = that.collection;
    var formData = $(event.currentTarget).serializeJSON();
    var tag = tags.findWhere({ label: formData.label }) || new App.Models.Tag(formData);
    tag.set("note_id", note.id)
    tag.save({}, {
      success : function() { note.tags().add(tag, { merge: true }) },
      error : function(model, response, options) {
         console.log(response.responseText);
         this.$("#label").val("");
      }
    })
  }

})
