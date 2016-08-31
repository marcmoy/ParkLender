class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.integer :spot_id, index: true
      t.integer :user_id, index: true
      t.string :url, null: false
      t.string :thumbnail
      t.timestamps
    end
  end
end
