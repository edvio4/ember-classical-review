class Review < ActiveRecord::Base
  belongs_to :piece

  validates :title, presence: true
  validates :description, presence: true
  validates :writer, presence: true
  validates :piece_id, presence: true
end
