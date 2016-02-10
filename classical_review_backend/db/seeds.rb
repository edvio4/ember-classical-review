# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

composers_pieces = [{Mozart: ['Marriage of Figaro', 'Magic Flute']},
        {Beethoven: ['Symphony No. 7', 'Symphony No. 9']}]


composers_pieces.each do |composer_pieces|
  composer_pieces.each do |composer,pieces|
    composer = Composer.create(name: composer)
    pieces.each { |piece| Piece.create(title: piece, composer: composer) }
  end
end
