class PieceResource < JSONAPI::Resource
  has_one :composer
  has_many :reviews
  attributes :title
end
