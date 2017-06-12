import Backbone from 'backbone';

import _ from 'underscore';
import $ from 'jquery';

var PetView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.$el.addClass("columns small-12 medium-3 large-4");

    // this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    console.log("rendering indiv pet view");
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click" : "sendPetDetails",
    "click button#delete-pet" : "sendPetToRemove"
  },

  sendPetDetails: function(event) {
    this.trigger("showPet", this);
  },

  sendPetToRemove: function(event) {
    console.log("clicked button to delete");
    this.trigger("deletePet", this);
  }



  // removeTask: function() {
  //   this.model.destroy();
  // }

});

export default PetView;
