class AddStickersToNotes < ActiveRecord::Migration
  def change
    add_column :notes, :sticker, :string
  end
end
