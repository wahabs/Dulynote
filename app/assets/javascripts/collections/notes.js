App.Collections.Notes = Backbone.Collection.extend({
  url: "api/notes",
  model: App.Models.Note,
  comparator: "ord",

  getOrFetch : function(id) {
    var note = this.get(id);

    if (!note) {
      note = new App.Models.Note({ id: id });
      note.fetch({
        success: function() { this.add(note); }.bind(this)
      });
    } else {
      note.fetch();
    }

    return note;
  },

  nextOrd : function() {
    var lastOrd = Math.max.apply(null, this.pluck("ord"));
    return (lastOrd < 0) ? 0 : lastOrd + 1;
  }

})
