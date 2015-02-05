class AddUserReferencesToTags < ActiveRecord::Migration
  def change
    add_column :tags, :user_id, :integer, index: true
  end
end
