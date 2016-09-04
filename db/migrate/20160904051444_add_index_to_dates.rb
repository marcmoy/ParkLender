class AddIndexToDates < ActiveRecord::Migration[5.0]
  def change
    add_index :date_ranges, :spot_id
  end
end
