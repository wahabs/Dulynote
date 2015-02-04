class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title, null: false, index: true
      t.text :body
      t.integer :ord, null: false
      t.references :notebook, index: true

      t.timestamps null: false
    end
    add_foreign_key :notes, :notebooks
  end
end
