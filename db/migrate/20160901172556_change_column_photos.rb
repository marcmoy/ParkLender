class ChangeColumnPhotos < ActiveRecord::Migration[5.0]
  def change
    remove_index :photos, :user_id
    remove_index :photos, :spot_id
  end
end
