import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('composer');
  },
  actions: {
    add(composer) {
      composer.save().then(() => {
        this.transitionTo('composers');
      });
    },
    cancel(composer) {
      composer.rollbackAttributes();
      this.transitionTo('composers');
    }
  }
});
