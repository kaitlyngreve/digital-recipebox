class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :recipes
  has_many :likes, serializer: LikeRecipeSerializer
end
