App.Views.SearchShow = Support.CompositeView.extend({
  template: JST["search/search_show"],

  events : {
    "keyup #search" : "filterResults"
  },

  initialize : function() {
    this.searchResults = this.collection;
    this.listenTo(this.searchResults, "sync", this.render);
  },

  render : function() {
    var content = this.template();
    this.$el.html(content);
    this.addNotes();
    return this;
  },

  addNotes : function() {
    this.appendChild(new App.Views.NotesIndex({ collection: this.searchResults }));
  },

  filterResults : function(event) {
  }

})
