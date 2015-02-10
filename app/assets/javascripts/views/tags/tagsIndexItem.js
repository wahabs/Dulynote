App.Views.TagsIndexItem = Support.CompositeView.extend({
  template: JST["tags/tags_index_item"],
  tagName: "li",
  className: "tag-index-item",

  initialize : function(options) {
    this.note = options.note;
  },

  events: {
    "click .tag-delete" : "deleteTag"
  },

  render: function() {
    var content = this.template({ tag: this.model });
    this.$el.html(content);
    return this;
  },

  deleteTag : function(event) {
    if (this.note) {
      var path = "/api/notes/" + this.note.id + "/tags/" + this.model.id;
      this.note.tags().remove(this.model);
      this.model.destroy({ url: path });
    } else {
      this.model.destroy();
    }
    this.leave();
  }

})
