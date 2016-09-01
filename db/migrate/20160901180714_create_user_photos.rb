class CreateUserPhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :user_photos do |t|
      t.integer :user_id, null: false, index: true
      t.string :url
      t.string :thumbnail
    end
  end
end
