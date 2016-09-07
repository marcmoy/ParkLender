class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.integer :host_id, null: false, index: true
      t.string :price_type, null: false
      t.integer :price, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :status, null: false, default: "PENDING"
      t.timestamps
    end
  end
end
