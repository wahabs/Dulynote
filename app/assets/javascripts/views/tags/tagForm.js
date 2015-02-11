App.Views.TagForm = Backbone.View.extend({
  template: JST["tags/tag_form"],

  events: {
    "click a" : "submitTag"
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
    var label = that.$("#label").val()
    var tag = tags.findWhere({ label: label }) || new App.Models.Tag({ label: label });
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
