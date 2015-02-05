App.Models.Note = Backbone.Model.extend({
  urlRoot: "api/notes",

  tags : function() {
    if (!this._tags) {
      this._tags = new App.Collections.Tags([], { note: this });
    }
    return this._tags;
  },

  parse : function(jsonResp) {
    if (jsonResp.tags) {
      this.tags().set(jsonResp.tags, { parse: true });
      delete jsonResp.tags;
    }
    return jsonResp;
  }

})
