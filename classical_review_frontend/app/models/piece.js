import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  composer: DS.belongsTo('composer')
});
