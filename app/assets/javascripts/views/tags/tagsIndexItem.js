App.Views.TagsIndexItem = Support.CompositeView.extend({
  template: JST["tags/tags_index_item"],
  tagName: "li",
  className: "tag-index-item",

  events: {
    "click button.tag-delete" : "deleteTag"
  },

  render: function() {
    var content = this.template({ note: this.model });
    this.$el.html(content);
    return this;
  },

  deleteTag : function(event) {
    this.model.destroy();
    this.leave();
    // Backbone.history.navigate(
    //   "notebooks/" + this.model.get("notebook_id"), { trigger: true }
    // );
  }

})
