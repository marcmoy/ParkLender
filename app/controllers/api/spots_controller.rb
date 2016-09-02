class Api::SpotsController < ApplicationController
  # before_action :require_logged_in, only: [:create]
  def index
    spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    # if (params[:minSeating] && params[:maxSeating])
    #   spots = spots.where(seating: seating_range)
    # end
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

  # def seating_range
  #   (params[:minSeating]..params[:maxSeating])
  # end

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

  def prices
    params[:prices]
  end
end
