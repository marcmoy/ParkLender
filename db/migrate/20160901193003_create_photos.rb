class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.integer :user_id
      t.integer :spot_id
      t.string :url
      t.string :thumbnail
      t.timestamps
    end
  end
end
