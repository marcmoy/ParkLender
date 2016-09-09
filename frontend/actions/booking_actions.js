export const BookingConstants = {
  REQUEST_BOOKINGS: "REQUEST_BOOKINGS",
  RECEIVE_BOOKINGS: "RECEIVE_BOOKINGS",
  SUBMIT_BOOKING: "SUBMIT_BOOKING",
  // REQUEST_BOOKING: "REQUEST_BOOKING",
  REMOVE_BOOKING: "REMOVE_BOOKING",
  RECEIVE_BOOKING: "RECEIVE_BOOKING"
};

export const requestBookings = () => ({
  type: BookingConstants.REQUEST_BOOKINGS
});

export const receiveBookings = (bookings, success) => ({
  type: BookingConstants.RECEIVE_BOOKINGS,
  bookings,
  success
});

export const submitBooking = (booking, success) => ({
  type: BookingConstants.SUBMIT_BOOKING,
  booking,
  success
});

// export const requestBooking = (booking, success) => ({
//   type: BookingConstants.REQUEST_BOOKING,
//   booking,
//   success
// });

export const receiveBooking = (booking, success) => ({
  type: BookingConstants.RECEIVE_BOOKING,
  booking,
  success
});

export const removeBooking = (booking, success) => ({
  type: BookingConstants.REMOVE_BOOKING,
  booking,
  success
});
