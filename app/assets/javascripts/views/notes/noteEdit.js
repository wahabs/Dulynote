App.Views.NoteEdit = Support.CompositeView.extend({
  template: JST["notes/note_edit"],

  initialize : function(options) {
    // expecting note model
    this.tags = options.tags;
    this.notebooks = options.notebooks;
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.tags(), 'add', this.render);
    this.listenTo(App.eventBus, "activateNote", this.activateNote);
    $('#update-note').on("click", this.submitNote.bind(this));
    $('.notebook-select').on("change", this.submitNote.bind(this));
    $.cookie("activeNoteID") && this.activateNote(parseInt($.cookie("activeNoteID")));
  },

  events: {
    "submit #tag-form" : "submitNote"
  },

  activateNote : function(id) {
    // this.leave();
    this.model.id = id;
    this.model.fetch({
      success : function() { $.cookie("activeNoteID", id) },
      error : function() { $.removeCookie("activeNoteID") }
    });
  },

  render : function() {
    // if model exists, render default, else render new note button

    var content = this.template({ note: this.model, notebooks: this.notebooks });
    this.$el.html(content);
    this.addTags();
    this.addTagForm();
    this.addEditable();
    return this;
  },

  addEditable : function() {
    var that = this;
    var editables = aloha.dom.query('.editable', document).map(aloha);

    _(editables).each(function (editable) {
      for (var command in aloha.ui.commands) {
        this.$('.action-' + command).on(
          'click', aloha.ui.command(editable, aloha.ui.commands[command])
        );
      }
    })

    function middleware(event) {
      this.$('.active').removeClass('active');
      if ('leave' !== event.type) {
        var states = aloha.ui.states(aloha.ui.commands, event);
        for (var selector in states) {
          this.$('.action-' + selector).toggleClass('active', states[selector]);
        }
      }
      return event;
    }

    aloha.editor.stack.unshift(middleware);
  },

  addTagForm : function() {
    this.appendChildTo(new App.Views.TagForm({ model: this.model, collection: this.tags }), ".note-tags");
  },

  addTags : function() {
    this.appendChildTo(new App.Views.TagsIndex({ collection: this.model.tags(), note: this.model }), ".note-tags");
  },

  submitNote : function(event) {
    var that = this;

    that.model.set({
      title: that.$('#title').text(),
      body: that.$('#body').html(),
      notebook_id: that.$('#notebook').val()
    });

    var notebook = this.notebooks.getOrFetch(that.model.get("notebook_id"));
    that.model.save({}, {
      success: function() { notebook.notes().add(that.model, { merge: true }) }
    });
  }

})
