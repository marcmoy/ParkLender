class AddOptionToPhotos < ActiveRecord::Migration[5.0]
  def change
    change_column :photos, :url, :string, null: false
  end
end
