// Error handler
import { receiveErrors } from '../actions/session_actions';
// Booking API Util
import { createBooking } from '../util/booking_api_util';
// Booking Action
import { BookingConstants,receiveBooking } from '../actions/booking_actions';

export default ({getState, dispatch}) => next => action => {
  const requestSuccess = data => dispatch(receiveBooking(data));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch (action.type) {
    case BookingConstants.REQUEST_BOOKING:
      createBooking(action.booking, requestSuccess);
      return next(action);
    // case BookingConstants.REMOVE_BOOKING:
    //   deleteBooking(action.booking);
    //   return next(action);
    default:
      return next(action);
  }
};
