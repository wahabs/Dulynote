App.Views.NoteEdit = Support.CompositeView.extend({
  template: JST["notes/note_edit"],

  initialize : function(options) {
    // expecting note model
    this.tags = options.tags;
    this.notebooks = options.notebooks;
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.tags(), 'add', this.render);
  },

  events: {
    "submit #note-edit" : "submitNote",
    "click .tag-remove" : "removeTag"
  },

  render : function() {
    var content = this.template({ note: this.model, notebooks: this.notebooks });
    this.$el.html(content);
    this.addTagForm();
    this.addTags();
    this.addEditable();
    return this;
  },

  addEditable : function() {
    aloha.dom.query('.editable', document).forEach(aloha);
  },

  addTagForm : function() {
    this.appendChild(new App.Views.TagForm({ model: this.model, collection: this.tags }));
  },

  addTags : function() {
    this.appendChildTo(new App.Views.TagsIndex({ collection: this.model.tags(), note: this.model }), ".note-tags");
  },

  submitNote : function(event) {
    event.preventDefault();
    var that = this;

    var formData = $(event.currentTarget).serializeJSON();
    that.model.set(formData);

    that.model.set({
      title: $(event.currentTarget).find('#title').html(),
      body: $(event.currentTarget).find('#body').html()
    });

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
