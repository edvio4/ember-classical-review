import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var store = this.store;
    var current_piece = this.modelFor('piece');
    var new_review = store.createRecord('review');
    new_review.set('piece', current_piece);
    return new_review;
  },
  renderTemplate() {
    this.render('piece.review.new', { into: 'application' });
  },

  actions: {
    add(review) {
      review.save().then(() => {
        this.transitionTo('piece', this.modelFor('piece'));
      });
    },
    cancel(review) {
      review.rollbackAttributes();
      this.transitionTo('piece', this.modelFor('piece'));
    }
  }
});
