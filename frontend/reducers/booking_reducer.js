import { BookingConstants } from '../actions/booking_actions';
import { merge, isEmpty } from 'lodash';

const BookingReducer = function(state = {}, action){
  switch(action.type){
    case BookingConstants.RECEIVE_BOOKINGS:
      return action.bookings;
    case BookingConstants.RECEIVE_BOOKING:
      const newBooking = {[action.booking.id]: action.booking};
      return merge({}, state, newBooking);
    default:
      return state;
  }
};

export default BookingReducer;
