class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :title, null: false, unique: true
      t.integer :ord, null: false
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :notebooks, :users
  end
end
