class Like < ApplicationRecord
    belongs_to :user
    belongs_to :recipe

    # validates :user, presense: true
    # validates :recipe, presense: true
    validates_uniqueness_of :user_id, :scope => :recipe_id
end
