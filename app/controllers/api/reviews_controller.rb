class Api::ReviewsController < ApplicationController

  def create
    # @review = Review.new(review_params)

    # if @review.save!
    #   render :show
    # else
    #   render (
    #     json: ["Invalid review creation"],
    #     status: 401
    #   )
    # end
  end

  def index
    @reviews = nil

    if params[:spot_id]
      @reviews = Review.where(spot_id: params[:spot_id])
    elsif params[:user_id]
      @reviews = Review.where(user_id: params[:user_id])
    end

    render :index
  end

  private

  def review_params
    params.require(:review).permit(
      :author_id,
      :spot_id,
      :user_id,
      :rating,
      :content
    )
  end

end
