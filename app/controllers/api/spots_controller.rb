class Api::SpotsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    min = 0
    max = 100
    min = params[:priceRange][0].to_i if params[:priceRange]
    max = params[:priceRange][1].to_i if params[:priceRange]
    @price_filter = params[:prices] || %w(hourly_rate daily_rate monthly_rate)
    spots = apply_price_filters(spots, @price_filter, min, max)
    @min, @max = min, max
    @spots = spots
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      image_url = params[:spot][:image_url]
      Photo.create!(spot_id: @spot.id, url: image_url, thumbnail: image_url)
      render 'api/spots/show'
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  private

  def spot_params
    params.require(:spot).permit(
      :host_id,
      :lat, :lng,
      :address, :city, :state, :country,
      :title, :description,
      :hourly_rate, :daily_rate, :monthly_rate,
      :width, :length,
      :car, :motorcycle, :van, :truck
    )
  end

  def bounds
    params[:bounds]
  end

  def dates
    params[:dates]
  end

  def prices
    params[:prices]
  end

  def apply_price_filters(spots, price_types, min = 0, max = 100)
    price_types = %w(hourly_rate daily_rate monthly_rate) if price_types.empty?
    query = []
    price_types.each do |price|
      query << "#{price} BETWEEN #{min} AND #{max}"
    end
    spots.where(query.join(" OR "))
  end
end
