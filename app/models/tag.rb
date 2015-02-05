class Tag < ActiveRecord::Base
  validates :label, presence: true, uniqueness: { scope: :user_id }
  belongs_to :user
  has_many :taggings, dependent: :destroy
  has_many :notes, through: :taggings
end
