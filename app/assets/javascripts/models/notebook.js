App.Models.Notebook = Backbone.Model.extend({
  urlRoot: "/notebooks",

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

  nextOrd : function() {
    if (Math.max.apply(null, this.noteOrds()) < 0) {
      return 0;
    } else {
      return Math.max.apply(null, this.noteOrds()) + 1;
    }
  }

})
