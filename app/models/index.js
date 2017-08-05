import DS from 'ember-data';

export default DS.Model.extend({
  medicineName: DS.attr('string'),
  inStock: DS.attr('boolean'),
  price: DS.attr('number')
});
