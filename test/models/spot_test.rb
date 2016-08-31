# == Schema Information
#
# Table name: spots
#
#  id           :integer          not null, primary key
#  host_id      :integer          not null
#  title        :string(48)       not null
#  description  :text             not null
#  lat          :float            not null
#  lng          :float            not null
#  hourly_rate  :float            default(0.0)
#  daily_rate   :float            default(0.0)
#  monthly_rate :float            default(0.0)
#  address      :string
#  city         :string
#  state        :string
#  country      :string
#  width        :float            default(0.0), not null
#  length       :float            default(0.0), not null
#  car          :boolean          default(FALSE)
#  motorcycle   :boolean          default(FALSE)
#  van          :boolean          default(FALSE)
#  truck        :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
