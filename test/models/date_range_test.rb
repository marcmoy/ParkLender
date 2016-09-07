# == Schema Information
#
# Table name: date_ranges
#
#  id         :integer          not null, primary key
#  spot_id    :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class DateRangeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
