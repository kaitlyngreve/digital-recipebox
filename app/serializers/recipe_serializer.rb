class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :measurements_ingredients, :directions, :img_url, :cuisine_id, :user_id
end
