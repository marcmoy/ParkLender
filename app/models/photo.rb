# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  spot_id    :integer
#  url        :string           not null
#  thumbnail  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :spot, optional: true
end
