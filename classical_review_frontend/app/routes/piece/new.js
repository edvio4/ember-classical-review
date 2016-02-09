import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      piece: this.store.createRecord('piece'),
      composers: this.store.findAll('composer'),
    });
  },

  setupController(controller, models) {
    controller.set('piece', models.piece);
    controller.set('composers', models.composers);
  },

  actions: {
    add(composer_id, piece) {
      var composer = this.store.peekRecord('composer', composer_id);
      piece.set('composer', composer)
      piece.save().then(() => {
        this.transitionTo('pieces');
      });
    },
    cancel(piece) {
      piece.rollbackAttributes();
      this.transitionTo('pieces');
    }
  }
});
