export const BookingConstants = {
  REQUEST_BOOKING: "REQUEST_BOOKING",
  REMOVE_BOOKING: "REMOVE_BOOKING"
};

export const requestBooking = (booking, success) => ({
  type: BookingConstants.REQUEST_BOOKING,
  booking,
  success
});

export const removeBooking = booking => ({
  type: BookingConstants.REMOVE_BOOKING,
  booking
});
