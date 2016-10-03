class Api::SpotsController < ApplicationController
  # before_action :require_logged_in, only: [:create]
  def index
    spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    min = 0
    max = 100
    min = params[:priceRange][0].to_i if params[:priceRange]
    max = params[:priceRange][1].to_i if params[:priceRange]
    @price_filter = params[:prices] || %w(hourly_rate daily_rate monthly_rate)
    spots = apply_price_filters(spots, @price_filter, min, max)
    @spots = spots
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def create
    @spot = Spot.create!(spot_params)
    render :show
  end

  private

  def spot_params
    params.require(:spot).permit(
      :lat,
      :lng,
      :title,
      :description,
      :prices,
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

  def apply_price_filters(spots, price_types, min, max)
    price_types = %w(hourly_rate daily_rate monthly_rate) if price_types.empty?
    price_types.each do |price|
      spots = spots.where({ price => (min..max) })
    end
    spots
  end
end
