class Tag < ActiveRecord::Base
  validates :label, presence: true, uniqueness: { scope: :user_id,
    message: "tag already exists" }
  belongs_to :user
  has_many :taggings, dependent: :destroy
  has_many :notes, through: :taggings

end
