# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  spot_id    :integer
#  user_id    :integer
#  url        :string           not null
#  thumbnail  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
