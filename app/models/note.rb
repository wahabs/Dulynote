class Note < ActiveRecord::Base
  validates :title, :ord, presence: true
  belongs_to :notebook
  has_one :author, through: :notebook
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
end
