App.Models.Notebook = Backbone.Model.extend({

  urlRoot: "api/notebooks",

  notes : function() {
    if (!this._notes) {
      this._notes = new App.Collections.Notes([], { notebook: this });
    }
    return this._notes;
  },

  parse : function(jsonResp) {
    if (jsonResp.notes) {
      this.notes().set(jsonResp.notes, { parse: true });
      delete jsonResp.notes;
    }
    return jsonResp;
  },

  noteOrds : function() {
    return this.notes().pluck("ord");
  },

  nextNoteOrd : function() {
    var lastOrd = Math.max.apply(null, this.noteOrds());
    return (lastOrd < 0) ? 0 : lastOrd + 1;
  }

})
