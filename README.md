# ember-classical-review

I built this app to learn how to do simple CRUD functions with ember.js frontend and a Ruby on Rails backend. This app allows users to review classical pieces.  Users can add/edit composers.  Users can add/edit pieces.  Users can write reviews for a given piece.

In a former life, I was training to be a classical violinist, so this app is about something I love.
 
## Running locally
```
git clone git@github.com:edvio4/ember-classical-review.git
cd classical_review
cd classical_review_backend
bundle install
rake db:create && db:migrate && db:seed
rails s
..
cd classical_review_frontend
npm install -g ember-cli@beta
ember serve
```
Visit `localhost:4200` to run the app locally.

## To Dos

- Figure out how to make cors more secure
- Do more styling
- Figure out to order objects in ember
