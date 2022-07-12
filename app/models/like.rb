class Like < ApplicationRecord
    belongs_to :user
    belongs_to :recipe

    # validates :user, presense: true
    # validates :recipe, presense: true
end
