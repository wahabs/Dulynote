class Tag < ActiveRecord::Base
  validates :label, presence: true, uniqueness: true
end
