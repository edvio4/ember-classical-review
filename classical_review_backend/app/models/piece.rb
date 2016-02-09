class Piece < ActiveRecord::Base
  belongs_to :composer
  
  validates :title, presence: true, uniqueness: { scope: :composer_id }
  validates :composer_id, presence: true
end
