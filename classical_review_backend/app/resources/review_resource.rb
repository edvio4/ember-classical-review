class ReviewResource < JSONAPI::Resource
  has_one :composer
  has_one :piece
  attributes :title, :description, :writer
end
