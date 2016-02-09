class PieceResource < JSONAPI::Resource
  has_one :composer
  attributes :title
end
