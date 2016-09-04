class DateRange < ApplicationRecord
  belongs_to :spot, optional: true
  validates :spot_id, :start_date, :end_date, presence: true

  validate :start_must_come_before_end

  def start_must_come_before_end
    return if start_date < end_date
    errors[:start_date] << "must come before end date"
    errors[:end_date] << "must come after start date"
  end

  def in_range?(date)
    Date.parse(date).between?(start_date, end_date)
  end

  def overlaps?(dates)
    dates.any?{|date| in_range?(date)}
  end

end
