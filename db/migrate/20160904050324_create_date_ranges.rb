class CreateDateRanges < ActiveRecord::Migration[5.0]
  def change
    create_table :date_ranges do |t|
      t.integer :spot_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.timestamps
    end
  end
end
