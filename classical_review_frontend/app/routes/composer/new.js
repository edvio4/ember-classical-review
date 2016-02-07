import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    add() {
      const newComposer = this.store.createRecord('composer', this.currentModel);
      newComposer.save().then(() => {
        this.transitionTo('composers');
      });
    },
    cancel() {
      this.transitionTo('composers');
    }
  }
});