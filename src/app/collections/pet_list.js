import Backbone from 'backbone';

import Pet from 'app/models/pet';

var PetList = Backbone.Collection.extend({
  model: Pet,
  // add url
  url: "http://petdibs.herokuapp.com/pets"
  // add parse function
});

export default PetList;
