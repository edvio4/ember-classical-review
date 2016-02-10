class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :writer, null: false

      t.references :piece, foreign_key: true
    end
  end
end
