App.Models.Tag = Backbone.Model.extend({
  urlRoot: "api/tags",

  notes : function() {
    if (!this._notes) {
      this._notes = new App.Collections.Notes([], { tag: this });
    }
    return this._notes;
  },

  parse : function(jsonResp) {
    if (jsonResp.notes) {
      this.notes().set(jsonResp.notes, { parse: true });
      delete jsonResp.notes;
    }
    return jsonResp;
  }

})
