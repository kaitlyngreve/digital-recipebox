class CuisineSerializer < ActiveModel::Serializer
  attributes :id, :cuisine_type, :description
end
