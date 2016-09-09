export const fetchBookings = (success) => {
  $.ajax({
    method: 'GET',
    url: `api/bookings`,
    success
  });
};

export const createBooking = (booking, success) => {
  $.ajax({
    method: 'POST',
    url: `api/spots/${booking.spot_id}/bookings`,
    data: booking,
    dataType: 'json',
    success
  });
};

export const deleteBooking = (booking, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/spots/${booking.spot_id}/bookings/${booking.id}`,
    data: booking,
    dataType: 'json',
    success
  });
};
