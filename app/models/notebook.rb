class Notebook < ActiveRecord::Base
  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many :notes, dependent: :destroy
  validates :title, presence: true
  validates :title, uniqueness: true
  before_validation :ensure_title

  private

    def ensure_title
      if self.title.empty?
        self.title = "Untitled Notebook #{ self.author.notebooks.length }"
      end
    end

end
