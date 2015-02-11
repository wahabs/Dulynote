App.Views.TagsIndex = Support.CompositeView.extend({
  template: JST["tags/tags_index"],

  initialize : function(options) {
    this.note = options.note;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addTag);
  },

  render : function() {
    var content = this.template({ note: this.note });
    this.$el.html(content);
    this.collection.each( function(tag) { this.addTag(tag) }, this);
    return this;
  },

  addTag : function(tag) {
    var item = new App.Views.TagsIndexItem({ model: tag, note: this.note });
    this.appendChildTo(item, ".tags-list");
  }

})
