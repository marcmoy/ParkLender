json.extract! user, :id, :username, :photo, :email, :fname, :lname
json.memberSince user.member_since

json.bookings user.bookings

# json.bookings do
#   user.bookings.each do |booking|
#     json.set! booking.id do
#       json.partial! 'api/bookings/booking', booking: booking
#     end
#   end
# end

# json.bookings user.bookings, partial: 'bookings/booking', as: :booking
