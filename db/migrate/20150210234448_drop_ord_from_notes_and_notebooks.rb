class DropOrdFromNotesAndNotebooks < ActiveRecord::Migration
  def change
    remove_column :notebooks, :ord
    remove_column :notes, :ord
  end
end
