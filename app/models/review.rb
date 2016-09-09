# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  spot_id    :integer
#  user_id    :integer
#  rating     :integer          default(0), not null
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null

class Review < ApplicationRecord
  validates :author_id, presence: true
  validates_numericality_of :rating, :in => 0..5

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :spot, optional: true
  belongs_to :user, optional: true

  def date
    month = Date::MONTHNAMES[created_at.month]
    "#{month} #{created_at.day}, #{created_at.year}"
  end

end
