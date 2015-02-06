App.Views.NoteForm = Support.CompositeView.extend({
  template: JST["notes/note_form"],

  initialize : function(options) {
    // expecting note model
    this.notebooks = options.notebooks;
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.tags(), 'add remove', this.render);
  },

  events: {
    "submit #note-form" : "submitNote",
    "click .tag-remove" : "removeTag"
  },

  render : function() {
    var content = this.template({ note: this.model, notebooks: this.notebooks });
    this.$el.html(content);
    this.addTagForm();
    this.addTags();
    if (this.notebooks.length === 1) {
      this.$('.notebook-select').prop("hidden", true);
      this.$('#tag-form').prop("hidden", true);
    }
    return this;
  },

  addTagForm : function() {
    this.appendChild(new App.Views.TagForm({ model: this.model }));
  },

  addTags : function() {
    this.appendChildTo(new App.Views.TagsIndex({ collection: this.model.tags(), note: this.model }), ".note-tags");
  },

  // removeTag : function(event) {
  //   var tag = this.model.tags().getOrFetch($(event.currentTarget).data("tag-id"));
  //   this.model.tags().remove(tag);
  //   tag.destroy();
  //
  //   if (tag.notes().length === 1) {
  //     tag.destroy();
  //   }
  //
  //   this.model.save();
  // },

  submitNote : function(event) {
    event.preventDefault();
    var that = this;
    var formData = $(event.currentTarget).serializeJSON();
    that.model.set(formData);
    var notebook = this.notebooks.getOrFetch(that.model.get("notebook_id"));
    that.model.set("ord", notebook.notes().nextOrd());
    that.model.save({}, {
      success: function() {
        notebook.notes().add(that.model, { merge: true });
        Backbone.history.navigate("notebooks/" + notebook.id, { trigger: true })
      }
    });
  }

})
