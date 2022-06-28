class Cuisine < ApplicationRecord
    has_many :recipes
    has_many :users, through: :recipes

    validates :cuisine_type, presence: true
end
