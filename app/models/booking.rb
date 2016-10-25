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

class Booking < ApplicationRecord
  validates :spot_id, :user_id, :host_id, :price_type, :price,
            :start_time, :end_time, :start_date, :end_date, :status, presence: true
  validates_uniqueness_of :user_id, :scope => [:spot_id]

  validates :status, inclusion: { in: %w(PENDING APPROVED DENIED) }
  validates :price_type, inclusion: { in: %w(monthly_rate hourly_rate daily_rate) }

  validate :no_self_booking

  belongs_to  :user
  belongs_to  :host,
              primary_key: :id,
              foreign_key: :host_id,
              class_name: :User

  belongs_to :spot

  def no_self_booking
    return if host_id != user_id
    errors[:host_id] << "must can't be the same as user_id"
    errors[:user_id] << "must can't be the same as host_id"
  end

  def start_time_minutes
    hours = start_time.hour - 7
    hours += 24 if hours < 0
    hours *= 60
    hours + start_time.min
  end

  def end_time_minutes
    hours = end_time.hour - 7
    hours += 24 if hours < 0
    hours *= 60
    hours + end_time.min
  end
end
