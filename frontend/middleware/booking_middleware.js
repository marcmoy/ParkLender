// Error handler
import { receiveErrors } from '../actions/session_actions';
// Booking API Util
import {
  fetchBookings,
  createBooking,
  deleteBooking } from '../util/booking_api_util';
// Booking Action
import { BookingConstants,
  receiveBookings, receiveBooking } from '../actions/booking_actions';

export default ({getState, dispatch}) => next => action => {
  const fetchSuccess = (data) => dispatch(receiveBookings(data));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch (action.type) {
    case BookingConstants.SUBMIT_BOOKING:
        const submitSuccess = data => {
          dispatch(receiveBooking(data));
          action.success();
        };
        createBooking(action.booking, submitSuccess);
      return next(action);
    case BookingConstants.REQUEST_BOOKINGS:
      fetchBookings(fetchSuccess);
      return next(action);
    case BookingConstants.REMOVE_BOOKING:
      deleteBooking(action.booking, () => {
        action.success();
        fetchBookings(fetchSuccess);
      });
      return next(action);
    default:
      return next(action);
  }
};
