class Api::SpotsController < ApplicationController
  # before_action :require_logged_in, only: [:create]
  def index
    spots = bounds ? Spot.in_bounds(bounds) : Spot.all

    @price_filter = params[:prices] || ["hourly_rate","daily_rate","monthly_rate"]
    spots = apply_price_filters(spots, @price_filter) unless @price_filter.length == 3

    # spots = apply_date_filters(spots, dates) if dates

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
      :prices
      # :seating,
      # :picture_url
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

  def apply_price_filters(spots, filters)
    filters.each do |price|
      spots = spots.where("#{price} > ?", 0)
    end
    spots
  end
end
