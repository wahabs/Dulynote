class Note < ActiveRecord::Base
  validates :title, :ord, presence: true
  belongs_to :notebook
  has_one :author, through: :notebook
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  before_validation :ensure_title

  private

    def ensure_title
      if self.title.empty?
        self.title = "Untitled Note #{ self.author.notes.length }"
      end
    end

end
