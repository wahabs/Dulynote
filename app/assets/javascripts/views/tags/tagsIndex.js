App.Views.TagsIndex = Support.CompositeView.extend({
  template: JST["tags/tags_index"],

  initialize : function(options) {
    this.listenTo(this.collection, "sync", this.render)
    this.listenTo(this.collection, "add", this.addTag);
  },

  render : function() {
    var content = this.template();
    this.$el.html(content);
    this.collection.each( function(tag) { this.addTag(tag) }, this);
    // this.addTagForm();
    return this;
  },

  addTag : function(tag) {
    var item = new App.Views.TagsIndexItem({ model: tag });
    this.appendChildTo(item, ".tags-list");
  }

  // addTagForm : function() {
  //   var that = this;
  //   this.appendChildTo(
  //     new App.Views.NoteForm({
  //        model: new App.Models.Note(),
  //        notebooks: new App.Collections.Notebooks([that.model])
  //     }), ".note-new");
  // }

})
