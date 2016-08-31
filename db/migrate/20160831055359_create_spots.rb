class CreateSpots < ActiveRecord::Migration[5.0]
  def change
    create_table :spots do |t|
      t.integer :host_id, null: false, index: true
      t.string :title, null: false, limit: 48
      t.text :description, null: false, limit: 140
      t.float :lat, null: false
      t.float :lng, null: false
      t.float :hourly_rate, default: 0
      t.float :daily_rate, default: 0
      t.float :monthly_rate, default: 0
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.float :width, null: false, default: 0
      t.float :length, null: false, default: 0
      t.boolean :car, default: false
      t.boolean :motorcycle, default: false
      t.boolean :van, default: false
      t.boolean :truck, default: false
      t.timestamps
    end
  end
end
