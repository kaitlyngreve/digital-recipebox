class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :description
      t.string :measurements_ingredients
      t.text :directions
      t.string :img_url
      t.boolean :like, default: :false
      t.integer :cuisine_id
      t.integer :user_id

      t.timestamps
    end
  end
end
