export const createBooking = (booking, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/spots/${booking.spotId}/booking`,
    data: booking,
    dataType: 'json',
    success,
    error
  });
};
