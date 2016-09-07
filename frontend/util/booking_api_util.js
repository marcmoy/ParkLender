export const createBooking = (booking, success) => {
  $.ajax({
    method: 'POST',
    url: `api/spots/${booking.spot_id}/bookings`,
    data: booking,
    dataType: 'json',
    success
  });
};
