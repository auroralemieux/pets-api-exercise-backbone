import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import PetView from './pet_view';
import Pet from '../models/pet.js';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
      this.template = params.template;
      this.listenTo(this.model, "update", this.render);
    },

    render: function() {
      console.log("inside render function in pet-list");
      this.$('#pet-list').empty();
      var that = this;
      this.model.each(function(pet) {
        var petView = new PetView({
          tagName: 'li',
          model: pet,
          template: that.template
        });
        that.$("#pet-list").append(petView.render().el);
        that.listenTo(petView, "showPet", that.showPet);
        that.listenTo(petView, "hidePet", that.hidePet);

        // that.listenTo(petView, "deletePet", that.removePet);
      });

      return this;
    },


    events: {
      "click #add-pet" : "addPet",

    },

    removePet: function(event) {
      this.$("#pet").hide();
      // event.preventDefault();
      // event.stopPropagation();
      console.log(this.model);
      console.log(event.model);
      console.log("deleting model");
      event.model.destroy();
    },



    getFormData: function() {
      console.log("inside getFormData");
      var formName = this.$("#pet-name").val();
      this.$("#pet-name").val('');
      var formImage = this.$("#pet-img").val();
      this.$("#pet-img").val('');
      var formBreed = this.$("#pet-breed").val();
      this.$("#pet-breed").val('');
      // var formAge = $("#pet-age").val();
      // $("#pet-age").val('');

      return {
        name: formName,
        img: formImage,
        breed: formBreed
        // age: formAge
      };
    },

    addPet: function(event) {
      console.log("clicked addPet");
      event.preventDefault();
      var newPet = new Pet(this.getFormData());
      // this.model.add(newTask);
      this.model.create(newPet);
    },

    // hidePet: function(event) {
    //   console.log("hiding pet");
    //   this.$("#pet").hide();
    // },

    showPet: function(event) {
      console.log("trying to show pet");
      this.$("#pet").empty();
      this.$("#pet").show();
      var petDetailView = new PetView({
      model: event.model,
      template: _.template($("#pet-info-template").html())
    });
    this.$("#pet").append(petDetailView.render().el);
    this.listenTo(petDetailView, "deletePet", this.removePet);


    }
});

export default PetListView;
