import Backbone from 'backbone';

var Pet = Backbone.Model.extend({
  defaults: {
    name: "no name yet",
    img: "no image yet",
    breed: "no breed yet",
    age: 0,
    about: "no about yet",
    owner: "no owner yet"
  }
});

export default Pet;
