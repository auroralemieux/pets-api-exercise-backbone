import Backbone from 'backbone';

var PetView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.$el.addClass("columns small-12 medium-3 large-4");
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click" : "sendPetDetails"
    // "click button.alert" : "removeTask",
    // "click button.success" : "completeTask"
  },

  sendPetDetails: function(event) {
    this.trigger("showPet", this);
  }

  // removeTask: function() {
  //   this.model.destroy();
  // }

});

export default PetView;
