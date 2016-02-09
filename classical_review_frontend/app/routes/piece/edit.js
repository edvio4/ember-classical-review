import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      piece: this.store.findRecord('piece', params.id, { reload: true }),
      composers: this.store.findAll('composer'),
    });
  },

  setupController(controller, models) {
    controller.set('piece', models.piece);
    controller.set('composers', models.composers);
  },

  actions: {
    editPiece(composer_id, piece) {
      var composer = this.store.peekRecord('composer', composer_id);
      piece.set('composer', composer)
      piece.save().then(() => {
        this.transitionTo('piece', piece);
      });
    },
    cancel() {
      this.transitionTo('pieces');
    }
  }
});
