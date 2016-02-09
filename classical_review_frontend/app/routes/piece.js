import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('piece', params.id, { reload: true });
  }
});
