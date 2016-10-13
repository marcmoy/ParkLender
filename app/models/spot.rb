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

class Spot < ApplicationRecord
  validates   :host_id, :title, :description,
              :lat, :lng,
              :hourly_rate, :daily_rate, :monthly_rate,
              :address, :city, :state, :country,
              :width, :length,
              presence: true

  attr_reader :prices, :allowed_vehicles, :location, :size, :rating

  has_one     :photo
  has_many    :reviews
  has_many    :booking_requests,
              primary_key: :id,
              foreign_key: :spot_id,
              class_name: :Booking

  belongs_to  :host,
              primary_key: :id,
              foreign_key: :host_id,
              class_name: :User

  has_many :date_ranges

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

  def prices
    @prices ||= {
      hourly: self.hourly_rate,
      daily: self.daily_rate,
      monthly: self.monthly_rate
    }
  end

  def rates(price_types, min, max)
    price_types = prices if price_types.empty?
    rates = {}
    price_types.each do |type|
      cost = send(type)
      rates[type] = send(type) if cost.between?(min, max)
    end
    rates
  end

  def rating
    @rating ||= calc_rating
  end

  def num_reviews
    @num_reviews ||= reviews.count
  end

  def calc_rating
    return 0 if self.reviews.empty?
    sum = self.reviews.reduce(0) { |count,review| count + review.rating }
    avg = sum / self.reviews.count.to_f
    (avg * 2).round / 2.0 # rounds to nearest 0.5 decimal
  end

  def allowed_vehicles
    return @allowed_vehicles if @allowed_vehicles
    vehicles = []
    vehicles << "car" if car
    vehicles << "motorcycle" if motorcycle
    vehicles << "van" if van
    vehicles << "truck" if truck
    vehicles
  end

  def location
    @location ||= {
      address: address,
      city: city,
      state: state,
      country: country
    }
  end

  def size
    @size ||= { width: width, length: length }
  end

  def date_overlaps_availability?(dates)
    date_ranges.any? { |date_range| date_range.overlaps?(dates) }
  end

end
