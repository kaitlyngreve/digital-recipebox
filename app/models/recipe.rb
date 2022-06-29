class Recipe < ApplicationRecord
    belongs_to :cuisine
    belongs_to :user

    validates :title, presence: true, uniqueness: true
    validates :description, presence: true, length: { minimum: 20 }
    validates :measurements_ingredients, presence: true
    validates :directions, presence: true
    validates :img_url, presence: true
end
