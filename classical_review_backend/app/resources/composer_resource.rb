class ComposerResource < JSONAPI::Resource
  has_many :pieces
  attributes :name
end
