App.Collections.Notebooks = Backbone.Collection.extend({
  url: "api/notebooks",
  model: App.Models.Notebook,
  comparator: "ord"
})
