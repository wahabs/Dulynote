class Notebook < ActiveRecord::Base
  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many :notes

  validates :title, :ord, presence: true
  validates :title, uniqueness: true

end
