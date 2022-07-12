class Recipe < ApplicationRecord
    belongs_to :cuisine, optional: true
    belongs_to :user, optional: true
    has_many :likes, dependent: :destroy

    validates :title, presence: true, uniqueness: true
    validates :description, presence: true, length: { minimum: 20 }
    validates :measurements_ingredients, presence: true
    validates :directions, presence: true
    validates :img_url, presence: true
    # validates :like, numericality: { greater_than_or_equal_to: 0 }
end
