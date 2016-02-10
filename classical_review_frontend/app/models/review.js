import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  writer: DS.attr('string'),
  piece: DS.belongsTo('piece')
});
