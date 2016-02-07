import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('composer', params.id, { reload: true });
  },
  actions: {
    // const flashMessages = Ember.get(this, 'flashMessages');

    editComposer() {
      let composer = this.get('controller.model');
      composer.save().then(() => {
        // flashMessages.success('Composer successfully edited!');
        this.transitionTo('composers');
      });
    }
  }
});
