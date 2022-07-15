class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :measurements_ingredients, :directions, :img_url, :like, :cuisine_id, :user_id

  has_many :likes
end
