class Composer < ActiveRecord::Base
  before_validation :capitalize_name
  has_many :pieces

  validates :name, presence: true, uniqueness: true

  private

  def capitalize_name
    self.name = name.capitalize
  end
end
