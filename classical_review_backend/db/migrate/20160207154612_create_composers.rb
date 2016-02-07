class CreateComposers < ActiveRecord::Migration
  def change
    create_table :composers do |t|
      t.string :name, null: false

      t.timestamps null: false
    end

    add_index :composers, :name, unique: true
  end
end
