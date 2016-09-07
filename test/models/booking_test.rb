# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  spot_id    :integer          not null
#  user_id    :integer          not null
#  host_id    :integer          not null
#  price_type :string           not null
#  price      :integer          not null
#  start_time :time             not null
#  end_time   :time             not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
