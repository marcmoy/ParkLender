class CreateSpotPhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :spot_photos do |t|
      t.integer :spot_id, null: false, index: true
      t.string :url
      t.string :thumbnail
    end
  end
end
