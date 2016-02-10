import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('composers');
  this.route('composer', function() {
    this.route('new');
    this.route('edit', { path: ':id/edit' });
  });

  this.route('pieces');
  this.route('piece.new', { path: 'pieces/new' });

  this.route('piece', { path: 'pieces/:id' }, function() {
    this.route('review.new', { path: 'reviews/new'});
  });
  this.route('piece.edit', { path: 'pieces/:id/edit' });
  this.route('review.edit', { path: 'reviews/:id/edit' });
});

export default Router;
