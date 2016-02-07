import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('composer', params.id, { reload: true });
  },
  actions: {
    editComposer() {
      let composer = this.get('controller.model');
      composer.save().then(() => {
        this.transitionTo('composers');
      });
    }
  }
});