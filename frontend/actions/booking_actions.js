export const BookingConstants = {
  CREATE_BOOKING: "CREATE_BOOKING"
};

export const createBooking = request => ({
  type: BookingConstants.CREATE_BOOKING,
  request
});
