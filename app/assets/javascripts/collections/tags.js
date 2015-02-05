App.Collections.Tags = Backbone.Collection.extend({
  url: "api/tags",
  model: App.Models.Tag,

  notes : function() {
    var that = this;
    if (!that._notes) {
      that._notes = new App.Collections.Notes();
      that.each(function(tag) {
        that._notes.add(tag.notes().toJSON(), { silent: true });
      })
    }
    return that._notes;
  },

  getOrFetch : function(id) {
    var tag = this.get(id);

    if (!tag) {
      tag = new App.Models.Tag({ id: id });
      tag.fetch({
        success: function() { this.add(tag); }.bind(this)
      });
    } else {
      tag.fetch();
    }

    return tag;
  }

})
