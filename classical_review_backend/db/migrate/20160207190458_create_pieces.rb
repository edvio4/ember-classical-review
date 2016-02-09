class CreatePieces < ActiveRecord::Migration
  def change
    create_table :pieces do |t|
      t.string :title, null: false
      t.references :composer, foreign_key: true

      t.timestamps null: false
    end
    add_index :pieces, [:title, :composer_id], unique: true

  end
end
