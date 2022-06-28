class CreateCuisines < ActiveRecord::Migration[7.0]
  def change
    create_table :cuisines do |t|
      t.string :cuisine_type
      t.string :description

      t.timestamps
    end
  end
end
