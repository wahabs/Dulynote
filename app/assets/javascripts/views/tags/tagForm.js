App.Views.TagForm = Backbone.View.extend({
  template: JST["tags/tag_form"],

  initialize : function() {
    // this.listenTo(this.collection, "sync", this.render)
  },

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

    if (tags.pluck("label").indexOf(formData.label) > -1) {
      // tags contains tag, do not create a new one but just add the note to the tag notes()
    }
    var tag = new App.Models.Tag(formData);

    tag.set("note_id", note.id)
    tag.save({}, {
      success : function() { note.tags().add(tag, { merge: true }) },
      error : function(model, resp, options) {
         console.log(resp.responseText);
         this.$("#label").val("");
      }
    })
  }

})
