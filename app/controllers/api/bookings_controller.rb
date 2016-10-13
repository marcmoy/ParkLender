class Api::BookingsController < ApplicationController

  def index
    @bookings = Booking.all
    render :index
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.start_date = Date.parse(params[:booking][:start_date])
    @booking.end_date = Date.parse(params[:booking][:end_date])
    @booking.start_time  = parse_time(params[:booking][:start_time])
    @booking.end_time = parse_time(params[:booking][:end_time])
    @booking.host_id = Spot.find_by_id(params[:booking][:spot_id]).host.id

    if @booking.save!
			render :show
		else
			render(
        json: ["Invalid booking request"],
        status: 401
      )
		end
  end

  def destroy
    @booking = Booking.find_by_id(params[:id])
    @booking.delete
  end

  private

  def booking_params
    params.require(:booking).permit(
      :spot_id, :user_id, :price_type, :price
    )
  end

  def parse_time(mins)
    mins = mins.to_i
    hours = mins / 60
    mins -= hours * 60
    Time.new(2016,9,6,hours,mins)
  end
end
