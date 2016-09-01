class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false, index: true
      t.integer :spot_id, index: true
      t.integer :user_id, index: true
      t.integer :rating, null: false, default: 0, min: 0, limit: 5
      t.text :content
      t.timestamps
    end
  end
end
